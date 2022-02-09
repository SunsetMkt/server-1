<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Lukas Reschke <lukas@statuscode.ch>
 * @author Markus Goetz <markus@woboq.com>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Richard Steinmetz <richard@steinmetz.cloud>
 * @author Robin Appelman <robin@icewind.nl>
 * @author Robin McCorkell <robin@mccorkell.me.uk>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Stefan Weil <sw@weilnetz.de>
 * @author Vincent Petry <vincent@nextcloud.com>
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 *
 */
namespace OC\Memcache;

use OC\Profiler\Profiler;
use OCP\ICache;
use OCP\ICacheFactory;
use OCP\ILogger;
use OCP\IMemcache;
use phpDocumentor\Reflection\Types\ClassString;
use Psr\Log\LoggerInterface;

class Factory implements ICacheFactory {
	public const NULL_CACHE = NullCache::class;

	/**
	 * @var string $globalPrefix
	 */
	private $globalPrefix;

	/**
	 * @var LoggerInterface $logger
	 */
	private $logger;

	/**
	 * @var ?class-string<ICache> $localCacheClass
	 */
	private $localCacheClass;

	/**
	 * @var ?class-string<ICache> $distributedCacheClass
	 */
	private $distributedCacheClass;

	/**
	 * @var ?class-string<IMemcache> $lockingCacheClass
	 */
	private $lockingCacheClass;

	/** @var string */
	private $logFile;

	/** @var Profiler $profiler */
	private $profiler;

	/**
	 * @param string $globalPrefix
	 * @param LoggerInterface $logger
	 * @param ?class-string<ICache> $localCacheClass
	 * @param ?class-string<ICache> $distributedCacheClass
	 * @param ?class-string<IMemcache> $lockingCacheClass
	 * @param string $logFile
	 */
	public function __construct(string $globalPrefix, LoggerInterface $logger, Profiler $profiler,
		?string $localCacheClass = null, ?string $distributedCacheClass = null, ?string $lockingCacheClass = null, string $logFile = '') {
		$this->logger = $logger;
		$this->logFile = $logFile;
		$this->globalPrefix = $globalPrefix;

		if (!$localCacheClass) {
			$localCacheClass = self::NULL_CACHE;
		}
		if (!$distributedCacheClass) {
			$distributedCacheClass = $localCacheClass;
		}

		$missingCacheMessage = 'Memcache {class} not available for {use} cache';
		$missingCacheHint = 'Is the matching PHP module installed and enabled?';
		if (!class_exists($localCacheClass) || !$localCacheClass::isAvailable()) {
			throw new \OCP\HintException(strtr($missingCacheMessage, [
				'{class}' => $localCacheClass, '{use}' => 'local'
			]), $missingCacheHint);
		}
		if (!class_exists($distributedCacheClass) || !$distributedCacheClass::isAvailable()) {
			throw new \OCP\HintException(strtr($missingCacheMessage, [
				'{class}' => $distributedCacheClass, '{use}' => 'distributed'
			]), $missingCacheHint);
		}
		if (!($lockingCacheClass && class_exists($lockingCacheClass) && $lockingCacheClass::isAvailable())) {
			// don't fallback since the fallback might not be suitable for storing lock
			$lockingCacheClass = self::NULL_CACHE;
		}

		$this->localCacheClass = $localCacheClass;
		$this->distributedCacheClass = $distributedCacheClass;
		$this->lockingCacheClass = $lockingCacheClass;
		$this->profiler = $profiler;
	}

	/**
	 * create a cache instance for storing locks
	 *
	 * @param string $prefix
	 * @return IMemcache
	 */
	public function createLocking(string $prefix = ''): IMemcache {
		$cache = new $this->lockingCacheClass($this->globalPrefix . '/' . $prefix);
		if ($this->profiler->isEnabled() && $this->lockingCacheClass === '\OC\Memcache\Redis') {
			// We only support the profiler with Redis
			$cache = new ProfilerWrapperCache($cache, 'Locking');
			$this->profiler->add($cache);
		}

		if ($this->lockingCacheClass === Redis::class &&
			$this->logFile !== '' && is_writable(dirname($this->logFile)) && (!file_exists($this->logFile) || is_writable($this->logFile))) {
			$cache = new LoggerWrapperCache($cache, $this->logFile);
		}
		return $cache;
	}

	/**
	 * create a distributed cache instance
	 *
	 * @param string $prefix
	 * @return ICache
	 */
	public function createDistributed(string $prefix = ''): ICache {
		$cache = new $this->distributedCacheClass($this->globalPrefix . '/' . $prefix);
		if ($this->profiler->isEnabled() && $this->distributedCacheClass === '\OC\Memcache\Redis') {
			// We only support the profiler with Redis
			$cache = new ProfilerWrapperCache($cache, 'Distributed');
			$this->profiler->add($cache);
		}

		if ($this->distributedCacheClass === Redis::class && $this->logFile !== ''
			&& is_writable(dirname($this->logFile)) && (!file_exists($this->logFile) || is_writable($this->logFile))) {
			$cache = new LoggerWrapperCache($cache, $this->logFile);
		}
		return $cache;
	}

	/**
	 * create a local cache instance
	 *
	 * @param string $prefix
	 * @return ICache
	 */
	public function createLocal(string $prefix = ''): ICache {
		$cache = new $this->localCacheClass($this->globalPrefix . '/' . $prefix);
		if ($this->profiler->isEnabled() && $this->localCacheClass === '\OC\Memcache\Redis') {
			// We only support the profiler with Redis
			$cache = new ProfilerWrapperCache($cache, 'Local');
			$this->profiler->add($cache);
		}

		if ($this->localCacheClass === Redis::class && $this->logFile !== ''
			&& is_writable(dirname($this->logFile)) && (!file_exists($this->logFile) || is_writable($this->logFile))) {
			$cache = new LoggerWrapperCache($cache, $this->logFile);
		}
		return $cache;
	}

	/**
	 * check memcache availability
	 *
	 * @return bool
	 */
	public function isAvailable(): bool {
		return ($this->distributedCacheClass !== self::NULL_CACHE);
	}

	/**
	 * @see \OC\Memcache\Factory::createLocal()
	 * @param string $prefix
	 * @return ICache
	 */
	public function createLowLatency(string $prefix = ''): ICache {
		return $this->createLocal($prefix);
	}

	/**
	 * Check if a local memory cache backend is available
	 *
	 * @return bool
	 */
	public function isLocalCacheAvailable(): bool {
		return ($this->localCacheClass !== self::NULL_CACHE);
	}
}
