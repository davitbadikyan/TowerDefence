import {BaseScreen} from './BaseScreen';
import {Images} from '../assets';
import {TowerPlacement} from './TowerPlacement';
import {Constants} from '../data/models/interfaces';
import {PausePlayText} from './PausePlayClass';
import {TowerSelect} from './tower-select/TowerSelect';
import {GameController} from '../controllers/GameController';
export class GameScreen extends BaseScreen {
	private background: Phaser.Sprite;
	private cookie: Phaser.Sprite;
	private pausePlayTextButton: PausePlayText;
	private style: { font: string; fontWeight: string; fontSize: number; fill: string };
	private towerSelect: TowerSelect;
	private healthCount: Phaser.Text;
	private goldCount: Phaser.Text;


	constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer,
	                private constants: Constants, private gameController: GameController) {
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
		this.initCookie();
		this.initTowerPlaces();
		this.initHealthText();
		this.initGoldText();
		this.initPausePlayText();
		this.initMenuBar();
	}

	private initMenuBar(): void {
		this.towerSelect = new TowerSelect(this.game, this, this.constants, this.gameController);
		this.towerSelect.position.set(0, this.game.height);
	}

	private initBackground(): void {
		this.background = this.game.add.sprite(0, 0, Images.ImagesBackgroundBackground.getName(), null, this);
		this.add(this.background);
	}

	private initCookie(): void {
		this.cookie = this.game.add.sprite(
			this.constants.cookiePosition.x,
			this.constants.cookiePosition.y,
			Images.ImagesObjectsCookie.getName(), null, this
		);
	}

	public initTowerPlaces(): void {
		this.constants.towersPositions.forEach((pos, index) => {
			const tower = new TowerPlacement(
				this.game, pos.x, pos.y, Images.ImagesObjectsOpenspot.getName(), this, this.gameController, index
			);
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


	private initHealthText(): void {
		const healthText = this.game.add.text(
			this.constants.healthBarPosition.x,
			this.constants.healthBarPosition.y,
			'Health:', this.style, this);
		this.healthCount = this.game.add.text(200, 188, '3', this.style, this);
	}

	private initGoldText(): void {
		const goldText = this.game.add.text(
			this.constants.goldTextPosition.x,
			this.constants.goldTextPosition.y,
			'Gold:', this.style, this);
		this.goldCount = this.game.add.text(900, 188, '1000', this.style, this);

	}

	private initPausePlayText(): void {
		this.pausePlayTextButton = new PausePlayText(this.game, 1550, 188, 'Pause', this.style, this);
	}

}
