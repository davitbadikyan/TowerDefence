import {BaseScreen} from './BaseScreen';
export class GameScreen extends BaseScreen { {
	constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
		super(game, parent);
		this.initialize();
	}

	private initialize(): void {

	}
}