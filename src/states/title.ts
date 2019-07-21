import {GameScreen} from '../ui/GameScreen';
import {BaseScreen} from '../ui/BaseScreen';
import {Constants} from '../data/models/interfaces';
import {JSON as JSONFile} from '../assets';
import {GameController} from '../controllers/GameController';
export default class Title extends Phaser.State {

	private currentScreen: BaseScreen;
	private constans: Constants;

	public create(): void {
		this.initGame();
	}

	private initGame(): void {
		this.constans = this.game.cache.getJSON(JSONFile.JSONConstants.getName());
		this.currentScreen = new GameScreen(this.game, this.game.world, this.constans, new GameController(this.game, this.constans));

	}
}
