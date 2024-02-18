var config = {
    width: 1024,
    height: 512,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
        debug: false
      }
    }
  }

  
  var game = new Phaser.Game(config);