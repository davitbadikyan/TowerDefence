import PhaserTextStyle = Phaser.PhaserTextStyle;
export class PausePlayText extends Phaser.Text {
	private paused = false;

	constructor(game: Phaser.Game, x: number, y: number, key: string, style: PhaserTextStyle, parent: PIXI.DisplayObjectContainer) {
		super(game, x, y, key, style);
		parent.addChild(this);
		this.initButtonOnClick();
	}

	private initButtonOnClick(): void {
		this.inputEnabled = true;
		this.events.onInputDown.add(this.handleButtonOnClick, this);

	}

	private handleButtonOnClick(): void {
		if (this.paused) {
			this.text = 'Pause';
			this.paused = false;
		} else {
			this.text = 'Play';
			this.paused = true;
		}

	}
}
