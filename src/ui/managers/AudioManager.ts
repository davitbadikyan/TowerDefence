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
}
