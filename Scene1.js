class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image("background00", "assets/images/background00.png");
      this.load.image("background", "assets/images/background.png");
      this.load.image("HP", "assets/images/hptruskawka.png");
      this.load.audio("explosion_sound", ["sounds/bach01.aac.m4a",]);

      this.load.image("gameover", "assets/images/gameover.png");
      
      this.load.spritesheet("ship", "assets/spritesheets/ship.png",{
        frameWidth: 40,
        frameHeight: 40});
        
      this.load.spritesheet("ship2", "assets/spritesheets/ship2.png",{
        frameWidth: 32,
        frameHeight: 32});
         
      this.load.spritesheet("ship3", "assets/spritesheets/ship3.png",{
        frameWidth: 80,
        frameHeight: 80});

      this.load.spritesheet("ship4", "assets/spritesheets/ship4.png",{
        frameWidth: 32,
        frameHeight: 32});

      this.load.spritesheet("ship5", "assets/spritesheets/ship5.png",{
        frameWidth: 32,
        frameHeight: 32});

      this.load.spritesheet("explosion", "assets/spritesheets/wybuch.png",{
        frameWidth: 128,
        frameHeight: 128});

      this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
        frameWidth: 40,
        frameHeight: 40});

      this.load.spritesheet("player", "assets/spritesheets/player.png",{
        frameWidth: 90,
        frameHeight: 90
      });
      this.load.spritesheet("beam", "assets/spritesheets/beam.png",{
        frameWidth: 32,
        frameHeight: 36});



        

    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");

      this.anims.create({
        key: "ship1_anim",
        frames: this.anims.generateFrameNumbers("ship"),
        frameRate:10,
        repeat: -1
      });
      this.anims.create({
        key: "ship2_anim",
        frames: this.anims.generateFrameNumbers("ship2"),
        frameRate:10,
        repeat: -1
      });
      this.anims.create({
        key: "ship3_anim",
        frames: this.anims.generateFrameNumbers("ship3"),
        frameRate:5,
        repeat: -1
      });
      this.anims.create({
        key: "ship4_anim",
        frames: this.anims.generateFrameNumbers("ship4"),
        frameRate:5,
        repeat: -1
      });
      this.anims.create({
        key: "ship5_anim",
        frames: this.anims.generateFrameNumbers("ship5"),
        frameRate:5,
        repeat: -1
      });

      this.anims.create({
        key: "explode",
        frames: this.anims.generateFrameNumbers("explosion"),
        frameRate:20,
        repeat: 0,
        hideOnComplete: true
      });

      this.anims.create({
        key: "yellow",
        frames: this.anims.generateFrameNumbers("power-up",{
          start:0,
          end: 1
        }),
        frameRate:6,
        repeat: -1,
      });
      this.anims.create({
        key: "blue",
        frames: this.anims.generateFrameNumbers("power-up",{
          start:2,
          end: 3
        }),
        frameRate:6,
        repeat: -1,
      });
      this.anims.create({
        key: "pink",
        frames: this.anims.generateFrameNumbers("power-up",{
          start:4,
          end: 5
        }),
        frameRate:6,
        repeat: -1,
      });

      this.anims.create({
        key: "thrust",
        frames: this.anims.generateFrameNumbers("player"),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "beam_anim",
        frames: this.anims.generateFrameNumbers("beam"),
        frameRate:20,
        repeat: -1
      });

    }
  }