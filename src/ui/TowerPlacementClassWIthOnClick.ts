export class TowerPlacement extends Phaser.Sprite {
	constructor(game: Phaser.Game, x: number, y: number, key: string, parent: PIXI.DisplayObjectContainer) {
		super(game, x, y, key);
		parent.addChild(this);
		this.initOnClick();
	}

	private initOnClick(): void {
		this.events.onInputDown.add(this.handleOnClick, this);
	}

	private handleOnClick(): void {

	}

}
