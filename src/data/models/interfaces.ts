export interface Position {
	x: number;
	y: number;
}

export interface Constants {
	towersPositions: Position[];
	healthBarPosition: Position;
	goldTextPosition: Position;
	cookiePosition: Position;
	rotationPoint1: Position;
	rotationPoint2: Position;
	rotationPoint3: Position;
	rotationPoint4: Position;
	towerSelect: {
		closeButton: Position;
		monsterSelect: {
			priceMarginTop: number,
			marginLeft: number,
			initialMargin: number
		}
	}
}