function Enemy(initPosX, initPosY)
{
	var imgSrc = 'script/images/enemy.png';

	this.width = 22;
	this.height = 16;

	var sprite = new Sprite(3);

	sprite.initImage(imgSrc, this.width, this.height);
	sprite.initPosition(initPosX, initPosY);

	var currentAction = 'left';

	this.draw = function()
	{
		sprite.draw();
	}

	this.step = function()
	{
		if(currentAction == 'left')
			sprite.moveLeft();
		else if(currentAction == 'right')
			sprite.moveRight();
	}

	this.jump = function()
	{
		if(currentAction == 'left')
			currentAction = 'right';
		else
			currentAction = 'left';

		sprite.moveFront();
	}

	this.checkStep = function()
	{
		if(sprite.x <= 10 && currentAction == 'left')
			currentAction = 'right';
		else if(sprite.x >= (WINDOW_WIDTH - 10) && currentAction == 'right')
			currentAction = 'left';

		return currentAction;
	}

	this.getPositionX = function()
	{
		return sprite.x;
	}

	this.getPositionY = function()
	{
	 	return sprite.y;
	}
}