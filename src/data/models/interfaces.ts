export interface Position {
	x: number;
	y: number;
}

export interface Constants {
	towersPositions: Position[];
	healthBarPosition: Position;
	goldTextPosition: Position;
	cookiePosition: Position;
	towerSelect: {
		closeButton: Position;
		monsterSelect: {
			priceMarginTop: number,
			marginLeft: number,
			initialMargin: number
		}
	}
}