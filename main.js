import { Game } from 'phaser';

const config = {
  type: Phaser.CANVAS,
  width: 576,
  height: 324,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
const game = new Phaser.Game(config);

function createImageObj(velocity) {
  return {
    image: null,
    x: 0,
    velocity: velocity
  }
}

let cityLayer1 = createImageObj(0.1);
let cityLayer2 = createImageObj(0.2);
let cityLayer3 = createImageObj(0.3);
let cityLayer4 = createImageObj(0.4);

function preload() {
  this.load.image('sky', 'assets/1.png');
  this.load.image('cityLayer1', 'assets/2.png');
  this.load.image('cityLayer2', 'assets/3.png');
  this.load.image('cityLayer3', 'assets/4.png');
  this.load.image('cityLayer4', 'assets/5.png');
}
function create() {
  this.add.image(0,0,'sky').setOrigin(0);
  
  cityLayer1.image = this.add.image(cityLayer1.x,0,'cityLayer1').setOrigin(0);
  cityLayer2.image = this.add.image(cityLayer2.x,0,'cityLayer2').setOrigin(0);
  cityLayer3.image = this.add.image(cityLayer3.x,0,'cityLayer3').setOrigin(0);
  cityLayer4.image = this.add.image(cityLayer4.x,0,'cityLayer4').setOrigin(0);
}
function update() {
  cityLayer1.x += cityLayer1.velocity;
  cityLayer2.x += cityLayer2.velocity;
  cityLayer3.x += cityLayer3.velocity;
  cityLayer4.x += cityLayer4.velocity;

  cityLayer1.image.setPosition(cityLayer1.x, 0);
  cityLayer2.image.setPosition(cityLayer2.x, 0);
  cityLayer3.image.setPosition(cityLayer3.x, 0);
  cityLayer4.image.setPosition(cityLayer4.x, 0);
}

