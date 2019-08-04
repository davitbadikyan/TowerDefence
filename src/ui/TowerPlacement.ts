import {GameController} from '../controllers/GameController';
import {TowerSelect} from './tower-select/TowerSelect';
export class TowerPlacement extends Phaser.Sprite {

	constructor(game: Phaser.Game, x: number, y: number, key: string,
	            parent: PIXI.DisplayObjectContainer, private gameController: GameController, private index: number,
	            private towerSelect: TowerSelect) {
		super(game, x, y, key);
		parent.addChild(this);
		this.initOnClick();
	}

	private initOnClick(): void {
		this.inputEnabled = true;
		this.events.onInputDown.add(this.handleOnClick, this);
	}

	private handleOnClick(): void {
		this.gameController.towerPlacementOnClick.dispatch(this.index);
	}

}
