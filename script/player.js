function Player()
{
	var imgSrc = 'script/images/ship.png';

	this.width = 26;
	this.height = 16;

	this.movingLeft = false;
	this.movingRight = false;

	var sprite = new Sprite(20);

	sprite.initImage('script/images/ship.png', 26, 16);
	sprite.initPosition(WINDOW_WIDTH / 2, WINDOW_HEIGHT - 100);

	this.draw = function()
	{
		sprite.draw();
	}

	this.moveLeft = function()
	{
		sprite.moveLeft();
	}

	this.moveRight = function()
	{
	 	sprite.moveRight();
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