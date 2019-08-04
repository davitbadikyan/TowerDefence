import {Constants} from '../data/models/interfaces';
export class GameController {
	public towerPlacementOnClick: Phaser.Signal = new Phaser.Signal();
	public monsterOnClick: Phaser.Signal = new Phaser.Signal();
	public enemiesWaveStart: Phaser.Signal = new Phaser.Signal();
	public cookieEnemyCollisionSignal: Phaser.Signal = new Phaser.Signal();
	public lifeLossSignal: Phaser.Signal = new Phaser.Signal();
	private time: number = 3;
	private key: number;
	private enemyHealth: number;
	public enemyCount: number = 0;


	constructor(private game: Phaser.Game, private constants: Constants) {
		this.init();
	}

	private init(): void {
		this.startEnemyWave();
	}

	private startEnemyWave(): void {
		this.game.time.events.add(Phaser.Timer.SECOND, () => {
			this.enemyWave();
		}, this);

	}

	private enemyWave(): void {
		this.game.time.events.loop(Phaser.Timer.SECOND * this.time, this.overtimeEnemyChoosing, this);
	}

	private overtimeEnemyChoosing(): void {
		if (this.enemyCount >= 20 && this.enemyCount < 50) {
			this.time = 4;
		} else if (this.enemyCount >= 50 && this.enemyCount < 90) {
			this.time = 3.5;
		} else if (this.enemyCount >= 90) {
			this.time = 3;
		}
		this.key = Math.floor(Math.random() * 3);
		if (this.key === 0) {
			this.enemyHealth = 50;
		} else if (this.key === 1) {
			this.enemyHealth = 100;
		} else {
			this.enemyHealth = 150;
		}
		this.enemyCount += 1;
		this.enemiesWaveStart.dispatch(this.key, this.enemyHealth);
	}

}
