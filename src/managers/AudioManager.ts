import {Audio} from '../assets';
export class AudioManager {
	private static _instance: AudioManager;
	private game: Phaser.Game;

	private constructor() {
	}

	public initialize(game: Phaser.Game): void {
		this.game = game;
	}

	static get instance(): AudioManager {
		return this._instance || (this._instance = new this());
	}

	public playExplosion(): void {
		const explosionSound = this.game.add.audio(Audio.AudioExplosion.getName());
		explosionSound.play();
	}

	public playLaserShot(): void {
		const laserSound = this.game.add.audio(Audio.AudioLaser.getName());
		laserSound.play();
	}

	public playLifeLose(): void {
		const lifeLoseSound = this.game.add.audio(Audio.AudioLifeLose.getName());
		lifeLoseSound.play();
	}

	public playTowerPlace(): void {
		const towerPlaceSound = this.game.add.audio(Audio.AudioTowerPlace.getName());
		towerPlaceSound.play();
	}
}
