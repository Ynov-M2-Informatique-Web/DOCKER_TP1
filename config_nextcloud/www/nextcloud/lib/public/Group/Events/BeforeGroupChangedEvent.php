<?php

declare(strict_types=1);

/**
 * @copyright 2023 Julien Veyssier <julien-nc@posteo.net>
 *
 * @author Julien Veyssier <julien-nc@posteo.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCP\Group\Events;

use OCP\EventDispatcher\Event;
use OCP\IGroup;

/**
 * @since 26.0.0
 */
class BeforeGroupChangedEvent extends Event {
	private IGroup $group;
	private string $feature;
	/** @var mixed */
	private $value;
	/** @var mixed */
	private $oldValue;

	/**
	 * @since 26.0.0
	 */
	public function __construct(IGroup $group,
		string $feature,
		$value,
		$oldValue = null) {
		parent::__construct();
		$this->group = $group;
		$this->feature = $feature;
		$this->value = $value;
		$this->oldValue = $oldValue;
	}

	/**
	 *
	 * @since 26.0.0
	 *
	 * @return IGroup
	 */
	public function getGroup(): IGroup {
		return $this->group;
	}

	/**
	 *
	 * @since 26.0.0
	 *
	 * @return string
	 */
	public function getFeature(): string {
		return $this->feature;
	}

	/**
	 * @since 26.0.0
	 *
	 * @return mixed
	 */
	public function getValue() {
		return $this->value;
	}

	/**
	 *
	 * @since 26.0.0
	 *
	 * @return mixed
	 */
	public function getOldValue() {
		return $this->oldValue;
	}
}
