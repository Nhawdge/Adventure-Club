"use strict";

function cameraFollow() {
  var cameraFocusCenterX = camPanX + canvas.width / 2;
  var cameraFocusCenterY = camPanY + canvas.height / 2;

  var playerDistFromCameraFocusX = Math.abs(activeObjects[1].Position.x - cameraFocusCenterX);
  var playerDistFromCameraFocusY = Math.abs(activeObjects[1].Position.y - cameraFocusCenterY);

  if (playerDistFromCameraFocusX > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X) {
    if (cameraFocusCenterX < activeObjects[1].Position.x) {
      camPanX += 5;
    } else {
      camPanX -= 5;
    }
  }
  if (playerDistFromCameraFocusY > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y) {
    if (cameraFocusCenterY < activeObjects[1].Position.y) {
      camPanY += 5;
    } else {
      camPanY -= 5;
    }
    //console.log(camPanX, camPanY)
  }

  // instantCamFollow();

  // this next code blocks the game from showing out of bounds
  // (this isn't required, if you don't mind seeing beyond edges)
  // if (camPanX < 0) {
  //   camPanX = 0;
  // }
  // if (camPanY < 0) {
  //   camPanY = 0;
  // }
  // var maxPanRight = BRICK_COLS * BRICK_W - canvas.width;
  // var maxPanTop = BRICK_ROWS * BRICK_H - canvas.height;
  // if (camPanX > maxPanRight) {
  //   camPanX = maxPanRight;
  // }
  // if (camPanY > maxPanTop) {
  //   camPanY = maxPanTop;
  // }
}
'use strict';

function colorRect(topleftX, topleftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topleftX, topleftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function colorText(words, textX, textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(words, textX, textY);
}

function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap, -useBitmap.width / 2, -useBitmap.height / 2);
    canvasContext.restore();
}

function drawSpritemap(useBitmap, atX, atY, spriteX, spriteY, spriteWidth, spriteHeight) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    //canvasContext.rotate(withAng); 
    canvasContext.drawImage(useBitmap, spriteX, spriteY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    canvasContext.restore();
}

function clearScreen() {
    colorRect(0, 0, canvas.width, canvas.height, 'white');
}
"use strict";

var canvas;
var canvasContext;
var activeObjects = [];
var activeAssets = [];
var camPanX = 0;
var camPanY = 0;

var sliderX = 0;
var sliderY = 0;

var PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 150;
var PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 100;

window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext('2d');

    colorRect(0, 0, canvas.width, canvas.heigh, "black");
    colorText("Loading Images", canvas.width / 2, canvas.height / 2);

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    loadAssets();
    loadWorld();
    loadCharacters();

    // Run game

    loadMenu();

    startGame();
};

function keyPressed(evt) {
    //console.log(evt)
    keyAction(evt, true);
    //evt.preventDefault();
}

function keyReleased(evt) {
    keyAction(evt, false);
    //evt.preventDefault();
}

function keyAction(evt, newVal) {
    var player = activeObjects[1];
    var index = player.keysHeld.indexOf(evt.keyCode);

    if (newVal && index < 0) {
        player.keysHeld.push(evt.keyCode);
    } else {
        player.keysHeld.splice(index, 1);
    }
}

function loadAssets() {
    var assets = ["characters/character.png", "characters/cat.png", "backgrounds/towntileset.png"];

    for (var i in assets) {
        var assetElem = document.createElement("img");
        assetElem.src = "assets/sprites/" + assets[i];
        assetElem.id = assets[i].split("/")[1].split(".")[0];
        activeAssets.push(assetElem);
    }
    console.log(activeAssets);
}

function loadWorld() {
    var world = new World("Town");
    activeObjects.push(world);
}

function drawWorld() {
    colorRect(0, 0, canvas.width, canvas.height, "white");
}

function loadCharacters() {
    var player = new Player("One", activeAssets[0]);

    activeObjects.push(player);
}
function startGame() {
    var framesPerSecond = 30;
    var gameloopId = setInterval(gameLoop, 1000 / framesPerSecond);

    //setTimeout(function () {
    //        clearInterval(gameloopId);
    //}, 200);
}

function gameLoop() {
    //drawWorld();
    for (var i in activeObjects) {
        activeObjects[i].Draw();
    }
    cameraFollow();
}
"use strict";

// Menu Bar

function loadMenu() {
    // Show a menu before the game loads

    //Start game
    //Load Game
    //About

    clearScreen();

    var menuOptions = [{ title: "Start Game" }, { title: "About Game" }];

    for (var i in menuOptions) {
        colorRect(canvas.width / 2, canvas.height / 2 + i * 60, 80, 40, "black");
        colorRect(canvas.width / 2 + 2, canvas.height / 2 + 2 + i * 60, 76, 36, "white");

        colorText(menuOptions[i].title, canvas.width / 2 + 10, canvas.height / 2 + 20 + i * 60, "black");
    }
}
'use strict';

function oldPlayer(name) {
    self = this;

    self.name = name;
    self.spriteSelected = "character";
    self.sprite = activeAssets.find(function (elem) {
        return elem.id == self.spriteSelected;
    });

    self.skills = playerSkills();
    self.attributes = { speed: 5 };

    // Using WASD
    self.controls = { Left: 65, Up: 87, Right: 68, Down: 83 };
    self.keysHeld = [];
    self.position = { x: 10, y: 10, angle: 0 };

    self.move = function () {
        //console.log("moving", self.keysHeld);
        if (self.keysHeld.includes(self.controls.Left)) {
            self.position.x -= self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Right)) {
            self.position.x += self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Down)) {
            self.position.y += self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Up)) {
            self.position.y -= self.attributes.speed;
        }
    };

    self.draw = function () {
        // Called every loop (30 per second);
        self.move();
        drawBitmapCenteredWithRotation(self.sprite, self.position.x, self.position.y, 0);
    };
}

function Skill(skill) {
    var self = this;

    self.id = skill.id;
    self.name = skill.name;
    self.difficulty = skill.difficulty;

    self.maxLevel = 1000;
    self.currentLevel = 0;

    self.IncreaseSkill = function (points) {
        if (points > self.difficulty) {
            self.currentLevel++;
        }
    };
}

function playerSkills() {
    return {
        Fighting: new Skill({ id: 1, name: 'Fighting', difficulty: 1 }),
        Healing: new Skill({ id: 2, name: 'Healing', difficulty: 1 }),
        Blocking: new Skill({ id: 3, name: 'Blocking', difficulty: 1 })
    };
}
"use strict";

function World(world) {
    var self = this;
    self.tilesets = {
        Town: {
            Tiles: activeAssets.find(function (elem) {
                return elem.id == "towntileset";
            }),
            TileHeight: 40,
            TileWidth: 40,
            Grass: 0,
            Path: 1,
            Wall: 2,
            House: 3
        },
        Forest: {
            Tiles: activeAssets.find(function (elem) {
                return elem.id == "foresttileset";
            }),
            TileHeight: 40,
            TileWidth: 40,
            Grass: 0,
            Path: 1,
            Trees: 2
        }
    };

    self.town = {
        name: 'town',
        tileSet: 'town',
        grid: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    };

    self.Draw = function () {
        var tile = self.tilesets.Town.Tiles;
        var tileset = self.tilesets.Town;

        for (var row in self.town.grid) {
            for (var col in self.town.grid[row]) {
                var itemAtLoc = self.town.grid[row][col];
                var brickLeftEdgeX = col * tileset.TileWidth;
                var brickTopEdgeY = row * tileset.TileHeight;
                var spriteX = 0;
                var spriteY = tileset.TileHeight * itemAtLoc;

                drawSpritemap(tile, brickLeftEdgeX, brickTopEdgeY, spriteX, spriteY, tileset.TileWidth, tileset.TileHeight);
            }
        }
        return;
    };
}
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var Equipment = /** @class */function () {
    function Equipment() {}
    return Equipment;
}();
exports.Equipment = Equipment;
var Armor = /** @class */function () {
    function Armor() {}
    return Armor;
}();
var Helmet = /** @class */function (_super) {
    __extends(Helmet, _super);
    function Helmet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Helmet;
}(Armor);
var Shoulder = /** @class */function (_super) {
    __extends(Shoulder, _super);
    function Shoulder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shoulder;
}(Armor);
var Chest = /** @class */function (_super) {
    __extends(Chest, _super);
    function Chest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chest;
}(Armor);
var Legs = /** @class */function (_super) {
    __extends(Legs, _super);
    function Legs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Legs;
}(Armor);
var Feet = /** @class */function (_super) {
    __extends(Feet, _super);
    function Feet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Feet;
}(Armor);
"use strict";

exports.__esModule = true;
var Player = /** @class */function () {
    function Player() {
        this.Position = { x: 0, y: 0 };
        this.keysHeld = [];
        this.controls = { Left: 65, Up: 87, Right: 68, Down: 83 };
    }
    ;
    Player.prototype.Attack = function () {
        return 1;
    };
    ;
    Player.prototype.Draw = function () {
        this.Move();
        drawBitmapCenteredWithRotation(self.sprite, this.Position.x, this.Position.y, 0);
        return;
    };
    ;
    Player.prototype.Move = function () {
        //console.log("moving", self.keysHeld);
        if (self.keysHeld.includes(self.controls.Left)) {
            self.position.x -= self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Right)) {
            self.position.x += self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Down)) {
            self.position.y += self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Up)) {
            self.position.y -= self.attributes.speed;
        }
    };
    return Player;
}();
exports.Player = Player;
var Skill = /** @class */function () {
    function Skill(name, difficulty) {
        this.name = name;
        this.difficulty = difficulty;
    }
    return Skill;
}();
exports.Skill = Skill;
var Ability = /** @class */function () {
    function Ability(AbilityData, Skills) {}
    return Ability;
}();
exports.Ability = Ability;
"use strict";

exports.__esModule = true;
"use strict";

exports.__esModule = true;
//# sourceMappingURL=bundle.js.map
