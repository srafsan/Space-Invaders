var drawWindow = function()
{
	context.fillStyle = "black";
	context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	context.beginPath();
	context.rect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	context.closePath();
	context.fill();
}

var createEnemies = function(numRows, numCols)
{
	var refPosX = (WINDOW_WIDTH / 2); 
	var refPosY = (WINDOW_HEIGHT / 10);

	for(var x = 0;  x < numRows; ++x)
		for(var y = 0; y < numCols; ++y)
		{
			var posX = refPosX + (40 * x);
			var posY = refPosY + (40 * y);

			enemies[enemies.length] = new Enemy(posX, posY);
		}
}

var animate = function()
{
	var currentAction = '';

	if(player.movingLeft)
		player.moveLeft();
	else if(player.movingRight)
		player.moveRight();

	for(index in lasers)
	{
		lasers[index].draw();

		if(lasers[index].step())
			lasers.splice(index, 1);
	}

	for(index in enemies)
	{
		currentAction = enemies[index].checkStep();
		
		if(currentAction != previousAction)
			break;
	}

	for(index in enemies)
	{
		enemies[index].draw();

		if(currentAction != previousAction)
			enemies[index].jump();
		else
			enemies[index].step();		
	}
	previousAction = currentAction;
}

var detectColisions = function()
{
	for(indexLaser in lasers)
		for(indexEnemy in enemies)
			if(colisionHandler.detectColisionBetweenObjects(lasers[indexLaser], enemies[indexEnemy]))
			{
				lasers.splice(indexLaser, 1);
				enemies.splice(indexEnemy, 1);
				break;
			}
}

var runGame = function()
{
 	drawWindow();
	player.draw();
	animate();
	detectColisions();
	gameLoop = setTimeout(runGame, intervalTime);
}

const WINDOW_WIDTH = 600;
const WINDOW_HEIGHT = 600;
const FRAME_RATE = 50;

var gameLoop;
var intervalTime = 1000 / FRAME_RATE;
var previousAction = 'left';

var frameWindow = document.getElementById("content");
frameWindow.width = WINDOW_WIDTH;
frameWindow.height = WINDOW_HEIGHT;
var context = frameWindow.getContext("2d");

var keyHandler = new KeyHandler();
var colisionHandler = new ColisionHandler();
var player = new Player();
var lasers = new Array();
var enemies = new Array();

createEnemies(6, 6);

document.onkeypress = function(e)
{
	keyHandler.keyPress(e);	
}

document.onkeyup = function(e)
{
	keyHandler.keyUp(e);
}

runGame();