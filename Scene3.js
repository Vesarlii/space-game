class Scene3 extends Phaser.Scene {
    constructor() {
        super("endGame");
    }
  
    create(data) {
        this.add.text(1000, 700, "Do you want to play again?", {
            font: "25px Arial",
            fill: "pink"
        });
  
        if (data && data.score !== undefined) { // Sprawdzenie czy dane zostały przekazane i czy score jest zdefiniowany
          this.add.text(1000, 750, "Your score: " + data.score, {
            font: "25px Arial",
            fill: "pink"
          });
        } else {
          console.error("Score data is undefined!"); // Wypisz błąd w konsoli, jeśli dane są niezdefiniowane
        }
      
  
        this.add.image(1000, 500, "gameover");
  
        const yesButton = this.add.text(800, 900, "Yes!", {
            font: "25px Arial",
            fill: "white"
        }).setInteractive();
  
        const noButton = this.add.text(1200, 900, "No", {
            font: "25px Arial",
            fill: "white"
        }).setInteractive();
  
        yesButton.on('pointerdown', this.startGame, this);
  
        noButton.on('pointerdown', function() {
        });
  
  
    }
  
    // Metoda do rozpoczęcia nowej gry
    startGame() {
        window.location.reload();
    }
  }