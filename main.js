import Phaser from 'phaser';

const config = {
  type: Phaser.CANVAS,
  width: 576,
  height: 324,
  pixelArt: true,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
new Phaser.Game(config);

const parallaxLayers = [
  { key: 'cityLayer1', velocity: 0.1 },
  { key: 'cityLayer2', velocity: 0.2 },
  { key: 'cityLayer3', velocity: 0.3 },
  { key: 'cityLayer4', velocity: 0.4 }
];

function preload() {
  this.load.image('sky', 'assets/1.png');

  parallaxLayers.forEach((layer, id) => {
    this.load.image(layer.key, `assets/${id + 2}.png`);
  })
}
function create() {
  this.add.image(0,0,'sky').setOrigin(0);

  parallaxLayers.forEach(layer => {
    const { key, velocity } = layer;

    const layerGroup = this.add.group();
    layerGroup.enableBody = true;

    const image1 = layerGroup.create(0,0,key).setOrigin(0);
    const image2 = layerGroup.create(-image1.width, 0, key).setOrigin(0);
    
    layerGroup.velocity = velocity;

    layer.image = layerGroup;
  });
}
function update() {
  const canvasWidth = this.game.config.width;

  parallaxLayers.forEach(layer => {
    const { image, velocity } = layer;

    if (image.children.entries.length > 0) {
      const firstImage = image.getFirstAlive();
      if (firstImage.x <= -firstImage.width) {
        const lastImage = image.getLast(true);
        lastImage.x = firstImage.x + firstImage.width;
      }
    }

    image.children.entries.forEach(image => {
      image.x += velocity;

      if (image.x > canvasWidth) {
        image.x = -canvasWidth;
      }
    })
  });
}

