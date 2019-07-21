import {Images, Spritesheets} from '../../assets';
import {Constants} from '../../data/models/interfaces';
import {MonsterSelect} from './MonsterSelect';
import {GameController} from '../../controllers/GameController';
export class TowerSelect extends Phaser.Group {
	private towerMenuBackground: Phaser.Sprite;
	private closeCross: Phaser.Sprite;
	private towerMenuTween: Phaser.Tween;
	private towerMenuTweenDown: Phaser.Tween;
	private static readonly towerAssetNames = [
		Spritesheets.ImagesTowersTowerMonster1100110.getName(),
		Spritesheets.ImagesTowersTowerMonster2100110.getName(),
		Spritesheets.ImagesTowersTowerMonster3100110.getName()
	];

	constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer,
	            private constants: Constants, private gameController: GameController) {
		super(game, parent);
		this.init();
	}

	private init(): void {
		this.initBackground();
		this.closeButton();
		this.initTowers();
		this.attachListeners();
	}

	private initBackground(): void {
		this.towerMenuBackground = this.game.add.sprite(0, 0, Images.ImagesObjectsBDE1.getName(), null, this);
	}

	private closeButton(): void {
		const closeBtnPos = this.constants.towerSelect.closeButton;
		this.closeCross = this.game.add.sprite(
			closeBtnPos.x, closeBtnPos.y, Images.ImagesObjectsClose.getName(), null, this);
		this.closeCross.inputEnabled = true;
		this.closeCross.events.onInputDown.add(this.closeOnClick, this);
	}

	private closeOnClick(): void {
		this.towerMenuTweenDown = this.game.add.tween(this).to({y: 1080}, 1000, 'Sine.easeInOut', true);
	}

	private initTowers(): void {
		const monsterSelectMargins = this.constants.towerSelect.monsterSelect;
		TowerSelect.towerAssetNames.forEach((assetName, index) => {
			const monster = new MonsterSelect(this.game, this, this.constants, assetName, index);
			monster.position.set(
				monsterSelectMargins.initialMargin + monsterSelectMargins.marginLeft * index,
				(this.towerMenuBackground.height - monster.height) / 2);
			monster.onClick.add(this.handleInputChildOnDown, this);
		});

	}

	private handleInputChildOnDown(assetName: string): void {
		this.gameController.monsterOnClick.dispatch(assetName);
		this.closeOnClick();
	}

	private attachListeners(): void {
		this.gameController.towerPlacementOnClick.add(this.openTowerSelect, this);
	}

	private openTowerSelect(): void {
		this.towerMenuTween = this.game.add.tween(this).to({y: 680}, 1000, 'Sine.easeInOut', true);
	}


}
