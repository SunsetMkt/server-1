<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\Security;

use OCP\Security\ISecureRandom;

/**
 * Class SecureRandom provides a wrapper around the random_int function to generate
 * secure random strings. For PHP 7 the native CSPRNG is used, older versions do
 * use a fallback.
 *
 * Usage:
 * \OC::$server->get(ISecureRandom::class)->generate(10);
 * @package OC\Security
 */
class SecureRandom implements ISecureRandom {
	/**
	 * Generate a secure random string of specified length.
	 * @param int $length The length of the generated string
	 * @param string $characters An optional list of characters to use if no character list is
	 *                           specified all valid base64 characters are used.
	 * @throws \LengthException if an invalid length is requested
	 */
	public function generate(
		int $length,
		string $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	): string {
		if ($length <= 0) {
			throw new \LengthException('Invalid length specified: ' . $length . ' must be bigger than 0');
		}

		$maxCharIndex = \strlen($characters) - 1;
		$randomString = '';

		while ($length > 0) {
			$randomNumber = \random_int(0, $maxCharIndex);
			$randomString .= $characters[$randomNumber];
			$length--;
		}
		return $randomString;
	}
}
