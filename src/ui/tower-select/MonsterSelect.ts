import {Constants} from '../../data/models/interfaces';
import PhaserTextStyle = Phaser.PhaserTextStyle;
export class MonsterSelect extends Phaser.Group {
	private towerMonster: Phaser.Sprite;
	private towerMonsterPrice: Phaser.Text;
	private style: PhaserTextStyle;
	public onClick: Phaser.Signal = new Phaser.Signal();
	constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer,
	            private constants: Constants, private assetName: string, private index: number) {
		super(game, parent);
		this.init();
	}

	private init(): void {
		this.style = {
			font: 'CoolStory Regular',
			fontWeight: 'Bold',
			fontSize: 50,
			fill: '#000000'
		};
		this.initMonsterAsset();
		this.initMonsterPrice();
		this.initMonsterEvents();
	}

	private initMonsterAsset(): void {
		this.towerMonster = this.game.add.sprite(0, 0, this.assetName, null, this);
		this.towerMonster.inputEnabled = true;
		this.towerMonster.events.onInputDown.add(() => this.onClick.dispatch(this.assetName), this);
	}

	private initMonsterPrice(): void {
		this.towerMonsterPrice = this.game.add.text(
			0, 0, '50', this.style, this
		);
		this.towerMonsterPrice.position.set(
			(this.towerMonster.width - this.towerMonsterPrice.width) / 2,
			this.towerMonster.height + this.constants.towerSelect.monsterSelect.priceMarginTop);
	}
	private initMonsterEvents(): void {
		this.towerMonster.inputEnabled = true;
		this.towerMonster.events.onInputOver.add(this.handleImputOver, this);
		this.towerMonster.events.onInputOut.add(this.handleImputOut, this);
		this.towerMonster.input.useHandCursor = true;
	}
	private handleImputOver(): void {
		this.scale.set(1.1, 1.1);
	}
	private handleImputOut(): void {
		this.scale.set(1, 1);

	}
}
