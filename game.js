var gameSettings = {
  playerSpeed: 400,
}

var config = {
    width: 1024*2,
    height: 512*2,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2, Scene3],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
        debug: false
      }
    }
  }

  
  var game = new Phaser.Game(config);