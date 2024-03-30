class Explosion extends Phaser.GameObjects.Sprite{
    constructor (scene, x, y){
        super (scene, x, y, "explosion");
        scene.add.existing(this);
        this.play("explode").setScale(2);

        this.explosionSound = scene.sound.add("explosion_sound");

    }

    playExplosionSound() {
        this.explosionSound.play();
    }
}