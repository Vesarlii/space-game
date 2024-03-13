class Scene3 extends Phaser.Scene {
    constructor() {
      super("endGame");
    }




    create() {
      this.add.text(40, 40, "GAME OVER", {
        font: "25px Arial",
        fill: "pink"
      });

      this.add.image(1000, 500, "gameover");
    }

    

}