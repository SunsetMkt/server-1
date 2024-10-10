<?php

/**
 * SPDX-FileCopyrightText: 2017-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace Test\Command;

use OC\Command\FileAccess;
use OCP\Command\IBus;
use OCP\Command\ICommand;
use Test\TestCase;

class SimpleCommand implements ICommand {
	public function handle() {
		AsyncBusTest::$lastCommand = 'SimpleCommand';
	}
}

class StateFullCommand implements ICommand {
	private $state;

	public function __construct($state) {
		$this->state = $state;
	}

	public function handle() {
		AsyncBusTest::$lastCommand = $this->state;
	}
}

class FilesystemCommand implements ICommand {
	use FileAccess;

	public function handle() {
		AsyncBusTest::$lastCommand = 'FileAccess';
	}
}

function basicFunction() {
	AsyncBusTest::$lastCommand = 'function';
}

// clean class to prevent phpunit putting closure in $this
class ThisClosureTest {
	private function privateMethod() {
		AsyncBusTest::$lastCommand = 'closure-this';
	}

	public function test(IBus $bus) {
		$bus->push(function () {
			$this->privateMethod();
		});
	}
}

abstract class AsyncBusTest extends TestCase {
	/**
	 * Basic way to check output from a command
	 *
	 * @var string
	 */
	public static $lastCommand;

	/**
	 * @var \OCP\Command\IBus
	 */
	private $bus;

	public static function DummyCommand() {
		self::$lastCommand = 'static';
	}

	/**
	 * @return IBus
	 */
	protected function getBus() {
		if (!$this->bus instanceof IBus) {
			$this->bus = $this->createBus();
		}
		return $this->bus;
	}

	/**
	 * @return IBus
	 */
	abstract protected function createBus();

	protected function setUp(): void {
		self::$lastCommand = '';
	}

	public function testSimpleCommand(): void {
		$command = new SimpleCommand();
		$this->getBus()->push($command);
		$this->runJobs();
		$this->assertEquals('SimpleCommand', self::$lastCommand);
	}

	public function testStateFullCommand(): void {
		$command = new StateFullCommand('foo');
		$this->getBus()->push($command);
		$this->runJobs();
		$this->assertEquals('foo', self::$lastCommand);
	}

	public function testStaticCallable(): void {
		$this->getBus()->push(['\Test\Command\AsyncBusTest', 'DummyCommand']);
		$this->runJobs();
		$this->assertEquals('static', self::$lastCommand);
	}

	public function testMemberCallable(): void {
		$command = new StateFullCommand('bar');
		$this->getBus()->push([$command, 'handle']);
		$this->runJobs();
		$this->assertEquals('bar', self::$lastCommand);
	}

	public function testFunctionCallable(): void {
		$this->getBus()->push('\Test\Command\BasicFunction');
		$this->runJobs();
		$this->assertEquals('function', self::$lastCommand);
	}

	public function testClosure(): void {
		$this->getBus()->push(function () {
			AsyncBusTest::$lastCommand = 'closure';
		});
		$this->runJobs();
		$this->assertEquals('closure', self::$lastCommand);
	}

	public function testClosureSelf(): void {
		$this->getBus()->push(function () {
			AsyncBusTest::$lastCommand = 'closure-self';
		});
		$this->runJobs();
		$this->assertEquals('closure-self', self::$lastCommand);
	}


	public function testClosureThis(): void {
		// clean class to prevent phpunit putting closure in $this
		$test = new ThisClosureTest();
		$test->test($this->getBus());
		$this->runJobs();
		$this->assertEquals('closure-this', self::$lastCommand);
	}

	public function testClosureBind(): void {
		$state = 'bar';
		$this->getBus()->push(function () use ($state) {
			AsyncBusTest::$lastCommand = 'closure-' . $state;
		});
		$this->runJobs();
		$this->assertEquals('closure-bar', self::$lastCommand);
	}

	public function testFileFileAccessCommand(): void {
		$this->getBus()->push(new FilesystemCommand());
		$this->assertEquals('', self::$lastCommand);
		$this->runJobs();
		$this->assertEquals('FileAccess', self::$lastCommand);
	}

	public function testFileFileAccessCommandSync(): void {
		$this->getBus()->requireSync('\OC\Command\FileAccess');
		$this->getBus()->push(new FilesystemCommand());
		$this->assertEquals('FileAccess', self::$lastCommand);
		self::$lastCommand = '';
		$this->runJobs();
		$this->assertEquals('', self::$lastCommand);
	}


	abstract protected function runJobs();
}
