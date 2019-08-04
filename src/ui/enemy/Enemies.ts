import {EnemyState} from '../../data/models/enums';
import {Constants} from '../../data/models/interfaces';
import {GameController} from '../../controllers/GameController';
export class Enemies extends Phaser.Sprite {
	private movementState: EnemyState = EnemyState.FirstRow;
	private lives: number;

	constructor(game: Phaser.Game, x: number, y: number, key: string, parent: Phaser.Group, public health: number,
	            private constants: Constants, private gameController: GameController) {
		super(game, x, y, key);
		parent.addChild(this);
		this.init();
	}

	private init(): void {
		this.initAnimation();
		this.attachLifeLossSignal();
	}

	private initAnimation(): void {
		this.inputEnabled = true;
		this.animations.add('walk', [0, 1, 2]);
	}

	private startRotationTweenClockwise(nextState: EnemyState): void {
		const rotationTween = this.game.add.tween(this).to({
			angle: this.angle + 90
		}, 1000, null, true);
		rotationTween.onComplete.add(() => this.movementState = nextState, this);
	}

	private startRotationTweenCounterClockwise(nextState: EnemyState): void {
		const rotationTween = this.game.add.tween(this).to({
			angle: this.angle - 90
		}, 1000, null, true);
		rotationTween.onComplete.add(() => this.movementState = nextState, this);
	}

	private attachLifeLossSignal(): void {
		this.gameController.lifeLossSignal.add(this.lifeLoss, this);

	}

	private lifeLoss(lives: number): void {
		this.lives = lives;
		this.destroy();
		if (this.lives = 0) {
			console.info('GameOver');
		}

	}

	update() {
		this.animations.play('walk', 1, true);
		switch (this.movementState) {
			case EnemyState.FirstRow:
				this.x += 5;
				if (this.x >= this.constants.rotationPoint1.x) {
					this.startRotationTweenClockwise(EnemyState.SecondRow);
					this.movementState = EnemyState.NoOperation;
				}
				break;
			case EnemyState.NoOperation:
				break;
			case EnemyState.SecondRow:
				this.y += 5;
				if (this.y >= this.constants.rotationPoint2.y) {
					this.startRotationTweenClockwise(EnemyState.ThirdRow);
					this.movementState = EnemyState.NoOperation;
				}
				break;
			case EnemyState.NoOperation:
				break;
			case EnemyState.ThirdRow:
				this.x -= 5;
				if (this.x <= this.constants.rotationPoint3.x) {
					this.startRotationTweenCounterClockwise(EnemyState.ForthRow);
					this.movementState = EnemyState.NoOperation;
				}
				break;
			case EnemyState.NoOperation:
				break;
			case EnemyState.ForthRow:
				this.y += 5;
				if (this.y >= this.constants.rotationPoint4.y) {
					this.gameController.cookieEnemyCollisionSignal.dispatch(this);
					this.startRotationTweenCounterClockwise(EnemyState.FifthRow);
					this.movementState = EnemyState.NoOperation;
				}
				break;
			case EnemyState.NoOperation:
				break;
			case EnemyState.FifthRow:
				this.x += 5;
				break;
		}
	}
}