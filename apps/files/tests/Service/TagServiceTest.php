<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\Files\Tests\Service;

use OCA\Files\Service\TagService;
use OCP\Activity\IManager;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\ITags;
use OCP\IUser;
use OCP\IUserSession;

/**
 * Class TagServiceTest
 *
 * @group DB
 *
 * @package OCA\Files
 */
class TagServiceTest extends \Test\TestCase {

	/**
	 * @var string
	 */
	private $user;

	/** @var IUserSession|\PHPUnit\Framework\MockObject\MockObject */
	private $userSession;

	/** @var IManager|\PHPUnit\Framework\MockObject\MockObject */
	private $activityManager;

	/**
	 * @var \OCP\Files\Folder
	 */
	private $root;

	/** @var IEventDispatcher|\PHPUnit\Framework\MockObject\MockObject */
	private $dispatcher;

	/**
	 * @var \OCA\Files\Service\TagService|\PHPUnit\Framework\MockObject\MockObject
	 */
	private $tagService;

	/**
	 * @var \OCP\ITags
	 */
	private $tagger;

	protected function setUp(): void {
		parent::setUp();
		$this->user = static::getUniqueID('user');
		$this->activityManager = $this->createMock(IManager::class);
		\OC::$server->getUserManager()->createUser($this->user, 'test');
		\OC_User::setUserId($this->user);
		\OC_Util::setupFS($this->user);
		$user = $this->createMock(IUser::class);
		/**
		 * @var \OCP\IUserSession
		 */
		$this->userSession = $this->createMock(IUserSession::class);
		$this->userSession->expects($this->any())
			->method('getUser')
			->withAnyParameters()
			->willReturn($user);

		$this->root = \OC::$server->getUserFolder();
		$this->dispatcher = $this->createMock(IEventDispatcher::class);

		$this->tagger = \OC::$server->getTagManager()->load('files');
		$this->tagService = $this->getTagService(['addActivity']);
	}

	/**
	 * @param array $methods
	 * @return TagService|\PHPUnit\Framework\MockObject\MockObject
	 */
	protected function getTagService(array $methods = []) {
		return $this->getMockBuilder(TagService::class)
			->setConstructorArgs([
				$this->userSession,
				$this->activityManager,
				$this->tagger,
				$this->root,
				$this->dispatcher,
			])
			->setMethods($methods)
			->getMock();
	}

	protected function tearDown(): void {
		\OC_User::setUserId('');
		$user = \OC::$server->getUserManager()->get($this->user);
		if ($user !== null) {
			$user->delete();
		}
	}

	public function testUpdateFileTags(): void {
		$tag1 = 'tag1';
		$tag2 = 'tag2';

		$this->tagService->expects($this->never())
			->method('addActivity');

		$subdir = $this->root->newFolder('subdir');
		$testFile = $subdir->newFile('test.txt');
		$testFile->putContent('test contents');

		$fileId = $testFile->getId();

		// set tags
		$this->tagService->updateFileTags('subdir/test.txt', [$tag1, $tag2]);

		$this->assertEquals([$fileId], $this->tagger->getIdsForTag($tag1));
		$this->assertEquals([$fileId], $this->tagger->getIdsForTag($tag2));

		// remove tag
		$this->tagService->updateFileTags('subdir/test.txt', [$tag2]);
		$this->assertEquals([], $this->tagger->getIdsForTag($tag1));
		$this->assertEquals([$fileId], $this->tagger->getIdsForTag($tag2));

		// clear tags
		$this->tagService->updateFileTags('subdir/test.txt', []);
		$this->assertEquals([], $this->tagger->getIdsForTag($tag1));
		$this->assertEquals([], $this->tagger->getIdsForTag($tag2));

		// non-existing file
		$caught = false;
		try {
			$this->tagService->updateFileTags('subdir/unexist.txt', [$tag1]);
		} catch (\OCP\Files\NotFoundException $e) {
			$caught = true;
		}
		$this->assertTrue($caught);

		$subdir->delete();
	}

	public function testFavoriteActivity(): void {
		$subdir = $this->root->newFolder('subdir');
		$file = $subdir->newFile('test.txt');

		$this->tagService->expects($this->exactly(2))
			->method('addActivity')
			->withConsecutive(
				[true, $file->getId(), 'subdir/test.txt'],
				[false, $file->getId(), 'subdir/test.txt']
			);

		// set tags
		$this->tagService->updateFileTags('subdir/test.txt', [ITags::TAG_FAVORITE]);

		// remove tag
		$this->tagService->updateFileTags('subdir/test.txt', []);


		$subdir->delete();
	}
}
