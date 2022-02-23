function Sprite(increment)
{
	var increment = increment;

	this.initImage = function(src, width, height)
	{
		this.image = new Image();
		this.image.src = src;
		this.width = width;
		this.height = height;
	}

	this.initPosition = function(initPosX, initPosY)
	{
		this.x = initPosX;
		this.y = initPosY;	
	}

	this.setPosition = function(posX, posY)
	{
		if((posX > 0) && (posX < WINDOW_WIDTH))
		{
			this.x = posX;
	 		this.y = posY;
		}
	}

	this.draw = function() {
		var positionX = this.x - (this.width / 2);
		var positionY = this.y - (this.height / 2);

		context.drawImage(this.image, positionX, positionY);
	}

	this.moveLeft = function()
	{
		this.setPosition(this.x - increment, this.y);
	}

	this.moveRight = function()
	{
		this.setPosition(this.x + increment, this.y);
	}

	this.moveFront = function()
	{
		this.setPosition(this.x, this.y + (increment * 3));
	}
}