class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }
  
    create() {


      this.background00 = this.add.tileSprite(0, 0, config.width, config.height, "background00");
      this.background00.setOrigin(0, 0);
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);
  
      this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
      this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
      this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");

      
      this.ship1.play("ship1_anim");
      this.ship2.play("ship2_anim");
      this.ship3.play("ship3_anim");

      this.ship1.setInteractive();
      this.ship2.setInteractive();
      this.ship3.setInteractive();

      this.input.on("gameobjectdown", this.destroyShip, this);
  
    this.add.text(20, 20, "Playing game", {
        font: "25px Arial",
        fill: "pink"
      });

    

      this.powerUps = this.physics.add.group();

      var maxObjects =4;
      for (var i = 0; i <=maxObjects;i++){
var powerUp = this.physics.add.sprite(40, 40, "power-up");
this.powerUps.add(powerUp);
powerUp.setRandomPosition(0, 0, game.config.width, game.config.geight);

if(Math.random()>0.65){
  powerUp.play("blue");
  }else if (Math.random()>0.5){
    powerUp.play("pink");
    } else{
      powerUp.play("yellow");
    }

    powerUp.setVelocity(100, 100);
    powerUp.setCollideWorldBounds(true);
    powerUp.setBounce(1);

      }

      this.player = this.physics.add.sprite(config.width/2-45, config.height-64, "player");
      this.player.play("thrust");
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      this.player.setCollideWorldBounds(true);

      this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  
    }
  
 
    update() {
  
  
      this.moveShip(this.ship1, 5);
      this.moveShip(this.ship2, 2);
      this.moveShip(this.ship3, 3);
  
      this.background.tilePositionY -= 0.5;
      this.background00.tilePositionY -= 0.3;

      this.movePlayerManager();
      if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
        console.log("FIRE!");
      }
    
    }

    movePlayerManager(){
      if(this.cursorKeys.left.isDown){
        this.player.setVelocityX(-gameSettings.playerSpeed);
      }else if (this.cursorKeys.right.isDown){
        this.player.setVelocityX(gameSettings.playerSpeed);
      }
      
      if(this.cursorKeys.up.isDown){
        this.player.setVelocityY(-gameSettings.playerSpeed);
      }else if (this.cursorKeys.down.isDown){
        this.player.setVelocityY(gameSettings.playerSpeed);
      }
    
    }
  

    moveShip(ship, speed) {
  
      ship.y += speed;

      if (ship.y > config.height) {
   
        this.resetShipPos(ship);
      }
    }
  
  
    resetShipPos(ship){
 
      ship.y = 0;
 
      var randomX = Phaser.Math.Between(0, config.width);
      ship.x = randomX;
    }

    destroyShip(pointer, gameObject){
      gameObject.setTexture("explosion");
      gameObject.play("explode");
    }
  
  
  }``