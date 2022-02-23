function Laser(player)
{
	const INCREMENT = 20;

	this.width = 5;
	this.height = 5;
	this.x = player.getPositionX() - 2;
	this.y = player.getPositionY() - 15;

	this.draw = function()
	{
		context.fillStyle = "red";
		context.fillRect(this.x, this.y, this.width, this.height);	
	}

	this.step = function()
	{
		this.y = this.y - INCREMENT;
		
		if(this.y <= 0)
			return true;
		
		return false;
	}

	this.getPositionX = function()
	{
	 	return this.x;
	}


	this.getPositionY = function()
	{
	 	return this.y;
	}
}