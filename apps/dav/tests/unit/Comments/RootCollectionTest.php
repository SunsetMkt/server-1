<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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
namespace OCA\DAV\Tests\unit\Comments;

use OC;
use OCA\DAV\Comments\EntityTypeCollection as EntityTypeCollectionImplementation;
use OCA\DAV\Comments\RootCollection;
use OCP\Comments\CommentsEntityEvent;
use OCP\Comments\ICommentsManager;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IUser;
use OCP\IUserManager;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Log\LoggerInterface;
use Sabre\DAV\Exception\Forbidden;
use Sabre\DAV\Exception\NotAuthenticated;
use Sabre\DAV\Exception\NotFound;
use Test\TestCase;

class RootCollectionTest extends TestCase {

	/** @var ICommentsManager|MockObject */
	protected $commentsManager;
	/** @var IUserManager|MockObject */
	protected $userManager;
	/** @var LoggerInterface|MockObject */
	protected $logger;
	/** @var RootCollection */
	protected $collection;
	/** @var IUserSession|MockObject */
	protected $userSession;
	/** @var IEventDispatcher|IEventDispatcher */
	protected $dispatcher;
	/** @var IUser|MockObject */
	protected $user;

	/**
	 * @throws ContainerExceptionInterface
	 * @throws NotFoundExceptionInterface
	 */
	protected function setUp(): void {
		parent::setUp();

		$this->user = $this->createMock(IUser::class);
		$this->commentsManager = $this->createMock(ICommentsManager::class);
		$this->userManager = $this->createMock(IUserManager::class);
		$this->userSession = $this->createMock(IUserSession::class);
		$this->logger = $this->createMock(LoggerInterface::class);
		$this->dispatcher = OC::$server->get(IEventDispatcher::class);

		$this->collection = new RootCollection(
			$this->commentsManager,
			$this->userManager,
			$this->userSession,
			$this->dispatcher,
			$this->logger
		);
	}

	protected function prepareForInitCollections() {
		$this->user->expects($this->any())
			->method('getUID')
			->willReturn('alice');

		$this->userSession->expects($this->once())
			->method('getUser')
			->willReturn($this->user);

		foreach ($this->dispatcher->getSymfonyDispatcher()->getListeners(CommentsEntityEvent::class) as $listener) {
			$this->dispatcher->removeListener(CommentsEntityEvent::class, $listener);
		}
		$this->dispatcher->addListener(CommentsEntityEvent::class, function (CommentsEntityEvent $event) {
			$event->addEntityCollection('files', function () {
				return true;
			});
		}, 100);
	}

	public function testCreateFile() {
		$this->expectException(Forbidden::class);

		$this->collection->createFile('foo');
	}


	public function testCreateDirectory() {
		$this->expectException(Forbidden::class);

		$this->collection->createDirectory('foo');
	}

	/**
	 * @throws NotFound|NotAuthenticated
	 */
	public function testGetChild() {
		$this->prepareForInitCollections();
		$etc = $this->collection->getChild('files');
		$this->assertInstanceOf(EntityTypeCollectionImplementation::class, $etc);
	}


	/**
	 * @throws NotAuthenticated
	 */
	public function testGetChildInvalid() {
		$this->expectException(NotFound::class);

		$this->prepareForInitCollections();
		$this->collection->getChild('robots');
	}


	/**
	 * @throws NotFound
	 */
	public function testGetChildNoAuth() {
		$this->expectException(NotAuthenticated::class);

		$this->collection->getChild('files');
	}

	/**
	 * @throws NotAuthenticated
	 */
	public function testGetChildren() {
		$this->prepareForInitCollections();
		$children = $this->collection->getChildren();
		$this->assertNotEmpty($children);
		foreach ($children as $child) {
			$this->assertInstanceOf(EntityTypeCollectionImplementation::class, $child);
		}
	}


	public function testGetChildrenNoAuth() {
		$this->expectException(NotAuthenticated::class);

		$this->collection->getChildren();
	}

	/**
	 * @throws NotAuthenticated
	 */
	public function testChildExistsYes() {
		$this->prepareForInitCollections();
		$this->assertTrue($this->collection->childExists('files'));
	}

	/**
	 * @throws NotAuthenticated
	 */
	public function testChildExistsNo() {
		$this->prepareForInitCollections();
		$this->assertFalse($this->collection->childExists('robots'));
	}


	public function testChildExistsNoAuth() {
		$this->expectException(NotAuthenticated::class);

		$this->collection->childExists('files');
	}


	public function testDelete() {
		$this->expectException(Forbidden::class);

		$this->collection->delete();
	}

	public function testGetName() {
		$this->assertSame('comments', $this->collection->getName());
	}


	public function testSetName() {
		$this->expectException(Forbidden::class);

		$this->collection->setName('foobar');
	}

	public function testGetLastModified() {
		$this->assertSame(null, $this->collection->getLastModified());
	}
}
