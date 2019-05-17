import {BaseScreen} from './BaseScreen';
import {Images} from '../assets';
import {TowerPlacement} from './TowerPlacementClassWIthOnClick';
import {Constants} from '../data/models/interfaces';
import {PausePlayText} from './PausePlayClass';
export class GameScreen extends BaseScreen {
	private background: Phaser.Sprite;
	private cookie: Phaser.Sprite;
	private pausePlayTextButton: PausePlayText;
	private style: { font: string; fontWeight: string; fontSize: number; fill: string };


	constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer, private constants: Constants) {
		super(game, parent);
		this.initialize();
	}

	private initialize(): void {
		this.style = {
			font: 'CoolStory Regular',
			fontWeight: 'Bold',
			fontSize: 50,
			fill: '#687272'
		};
		this.initBackground();
		this.initTowerPlaces();
		this.initCookie();
		this.initHealthText();
		this.initGoldText();
		this.initPausePlayText();

	}

	private initBackground(): void {
		this.background = this.game.add.sprite(0, 0, Images.ImagesBackgroundBackground.getName(), null, this);
		this.add(this.background);
	}

	private initTowerPlaces(): void {
		this.constants.towersPositions.forEach(tp => {
			const tower = new TowerPlacement(this.game, tp.x, tp.y, Images.ImagesObjectsOpenspot.getName(), this);
		});
		// const towerPlace1 = new TowerPlacement(this.game, 400, 270, Images.ImagesObjectsOpenspot.getName(), this);
		// const towerPlace2 = new TowerPlacement(this.game, 900, 270, Images.ImagesObjectsOpenspot.getName(), this);
		// const towerPlace3 = new TowerPlacement(this.game, 1400, 270, Images.ImagesObjectsOpenspot.getName(), this);
		// const towerPlace4 = new TowerPlacement(this.game, 650, 480, Images.ImagesObjectsOpenspot.getName(), this);
		// const towerPlace5 = new TowerPlacement(this.game, 1150, 480, Images.ImagesObjectsOpenspot.getName(), this);
		// const towerPlace6 = new TowerPlacement(this.game, 400, 700, Images.ImagesObjectsOpenspot.getName(), this);
		// const towerPlace7 = new TowerPlacement(this.game, 900, 700, Images.ImagesObjectsOpenspot.getName(), this);
		// const towerPlace8 = new TowerPlacement(this.game, 1400, 700, Images.ImagesObjectsOpenspot.getName(), this);
	}

	private initCookie(): void {

		this.cookie = this.game.add.sprite(
			this.constants.cookiePosition.x,
			this.constants.cookiePosition.y,
			Images.ImagesObjectsCookie.getName(), this
		);
	}

	private initHealthText(): void {
		const healthText = this.game.add.text(
			this.constants.healthBarPosition.x,
			this.constants.healthBarPosition.y,
			'Health:', this.style, this);
	}

	private initGoldText(): void {
		const goldText = this.game.add.text(
			this.constants.goldTextPosition.x,
			this.constants.goldTextPosition.y,
			'Gold:', this.style, this);
	}

	private initPausePlayText(): void {
		this.pausePlayTextButton = new PausePlayText(this.game, 1550, 188, 'Pause', this.style, this);
	}
}
