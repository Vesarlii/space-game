
class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
      this.livesGroup; 
      this.playerLives = 3;
      this.score = 0;
    }
  
    create() {


      this.background00 = this.add.tileSprite(0, 0, config.width, config.height, "background00");
      this.background00.setOrigin(0, 0);
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);

      this.load.image("HP", "assets/images/hptruskawka.png");

      //this.HP = this.add.sprite(config.width / 2, config.height / 2, "HP");
  
      this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
      this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
      this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");
      this.ship4 = this.add.sprite(config.width / 2 + 100, config.height / 2, "ship4");
      this.ship5 = this.add.sprite(config.width / 2 + 150, config.height / 2, "ship5");

      this.enemies = this.physics.add.group();
      this.enemies.add(this.ship1);
      this.enemies.add(this.ship2);
      this.enemies.add(this.ship3);
      this.enemies.add(this.ship4);
      this.enemies.add(this.ship5);

      
      this.ship1.play("ship1_anim");
      this.ship2.play("ship2_anim");
      this.ship3.play("ship3_anim");
      this.ship4.play("ship4_anim");  
      this.ship5.play("ship5_anim");

      this.ship1.setInteractive();
      this.ship2.setInteractive();
      this.ship3.setInteractive();
      this.ship4.setInteractive();
      this.ship5.setInteractive();

      this.input.on("gameobjectdown", this.destroyShip, this);
  
    this.add.text(20, 20, "Playing game", {
        font: "25px Arial",
        fill: "pink"
      });

    

      this.powerUps = this.physics.add.group();

      var maxObjects =4;
      var maxObjects = 4;
      for (var i = 0; i <= maxObjects; i++) {
          var powerUp = this.physics.add.sprite(40, 40, "power-up");
          this.powerUps.add(powerUp);
          powerUp.setRandomPosition(0, 0, game.config.width, game.config.height); // Poprawiony błąd w nazwie config.height

          
      var score = 0;

      this.livesGroup = this.add.group();

      for (var i = 1; i <= this.playerLives; i++) {
        var life = this.add.image(config.width - 50 * (i + 1), 50, "HP");
        life.setOrigin(1, 0);
        this.livesGroup.add(life);
      }

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
      this.projectiles = this.add.group();
  
      this.physics.add.collider(this.projectiles, this.powerUps, function(projectile, powerUp){
        projectile.destroy();
      });

      this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);
      this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
    
      this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);      
    }

 pickPowerUp(player, powerUp){
  powerUp.disableBody(true,true);
 }

 hurtPlayer(player, enemy){
  this.resetShipPos(enemy);
  var explosion = new Explosion(this, player.x, player.y);
  player.x = config.width /2 - 45;
  player.y = config.height -64;

  
  this.playerLives-- ;
  this.updateLivesDisplay(); 
 }

 

 hitEnemy(projectile, enemy){
  var explosion = new Explosion(this, enemy.x, enemy.y);
  projectile.destroy();
  this.resetShipPos(enemy);
  this.score += 15;
 }




    shootBeam(){
      console.log("shootBeam function called");
      var beam = new Beam(this);
       
    }


    updateLivesDisplay() {
      console.log("updateLivesDisplay function called");
  
      this.livesGroup.clear(true, true);
  
      for (var i = 0; i < this.playerLives; i++) {
        var life = this.add.image(config.width - 50 * (i + 1), 50, "HP");
        life.setOrigin(1, 0);
        this.livesGroup.add(life);
      }
  
      if (this.playerLives === 0) {
        this.scene.start('endGame');
      }
    }


    update() {
  
  
      this.moveShip(this.ship1, 5);
      this.moveShip(this.ship2, 2);
      this.moveShip(this.ship3, 3);
      this.moveShip(this.ship4, 2);
      this.moveShip(this.ship5, 3);
  
      this.background.tilePositionY -= 0.5;
      this.background00.tilePositionY -= 0.3;

      this.movePlayerManager();
      if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
        this.shootBeam();

        
      }

      for(var i = 0; i < this.projectiles.getChildren().length; i++){
        var beam = this.projectiles.getChildren() [i];
        beam.update();
      }
    
    }

    movePlayerManager(){
      if(this.cursorKeys.left.isDown){
        this.player.setVelocityX(-gameSettings.playerSpeed);
      }else if (this.cursorKeys.right.isDown){
        this.player.setVelocityX(gameSettings.playerSpeed);
      }else if(this.cursorKeys.up.isDown){
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