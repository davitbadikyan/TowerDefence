import {Constants} from '../data/models/interfaces';
export class GameController {
	public towerPlacementOnClick: Phaser.Signal = new Phaser.Signal();
	public monsterOnClick: Phaser.Signal = new Phaser.Signal();
	private monsterOnPlace: Phaser.Sprite;
	private index: number;
	private assetName: string;


	constructor(private game: Phaser.Game, private constants: Constants) {
		this.init();
	}

	private init(): void {
		this.attachMonsterListener();
		this.attachPlacementListener();
	}

	private attachPlacementListener(): void {
		this.towerPlacementOnClick.add(this.placementCoordinates, this);
	}

	private placementCoordinates(index: number): void {
		this.index = index;
	}

	private attachMonsterListener(): void {
		this.monsterOnClick.add(this.monsterOnPlacement, this);
	}

	private monsterOnPlacement(assetName: string): void {
		this.assetName = assetName;
		this.monsterOnPlace = this.game.add.sprite(this.constants.towersPositions[this.index].x + 10,
			this.constants.towersPositions[this.index].y - 10, this.assetName, null);
		this.monsterOnPlace.inputEnabled = true;
	}
}
