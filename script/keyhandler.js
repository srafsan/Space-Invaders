function KeyHandler()
{
 	this.Z_KEY = 122;
 	this.z_KEY = 90;
 	this.X_KEY = 120;
 	this.x_KEY = 88;
 	this.SPACE_KEY = 32;

	 this.keyPress = function(e)
	 {
 		keyPressed = e.which ? e.which : window.event.keyCode;

		 switch(keyPressed)
		 {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = true;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = true;
 				break;
 			case this.SPACE_KEY:
 				lasers[lasers.length] = new Laser(player);
 				break;
 		}
 	}

	 this.keyUp = function(e)
	 {
 		keyPressed = e.which ? e.which : window.event.keyCode;

		 switch(keyPressed)
		 {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = false;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = false;
 				break;
 		}
 	}
}