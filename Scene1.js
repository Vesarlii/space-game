class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image("background00", "assets/images/background00.png");
      this.load.image("background", "assets/images/background.png");
      
      this.load.spritesheet("ship", "assets/spritesheets/ship.png",{
        frameWidth: 40,
        frameHeight: 40});
        
      this.load.spritesheet("ship2", "assets/spritesheets/ship2.png",{
        frameWidth: 32,
        frameHeight: 32});
         
      this.load.spritesheet("ship3", "assets/spritesheets/ship3.png",{
        frameWidth: 80,
        frameHeight: 80});

        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
          frameWidth: 60,
          frameHeight: 60});

        this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
          frameWidth: 40,
          frameHeight: 40});

    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");

    }
  }