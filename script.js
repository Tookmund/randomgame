var character = prompt("Paste google url for character");
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('character',character);
  game.load.image('platform','http://t2.gstatic.com/images?q=tbn:ANd9GcSprZqkio6SxczT9OfaIQ37aazCfl9nAtRlPuylIWcxAHu5sSXV');
  game.load.image('background','http://t0.gstatic.com/images?q=tbn:ANd9GcRYz6d86rxtMUWhtvvaKzzSG-VxEQZJVRKC54zfcwfM_lkQqBRO');
}

var platforms;

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0,0,'background');
  platforms = game.add.group();
  platforms.enableBody = true;
  var ground = platforms.create(0,game.world.height - 64, 'platform');
  ground.scale.setTo(2,2);
  ground.body.immovable = true;
  
}

function update() {
  
}
