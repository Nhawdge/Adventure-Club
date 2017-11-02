var canvas;
var canvasContext;
var activeObjects = [];
var activeAssets = [];

window.onload = function () {
    canvas = document.getElementById("gameCanvas")
    canvasContext = canvas.getContext('2d');

    colorRect(0, 0, canvas.width, canvas.heigh, "black");
    colorText("Loading Images", canvas.width / 2, canvas.height / 2);

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    loadAssets();
    loadWorld();
    loadCharacters();
    
    // Run game

    startGame();
}


function keyPressed(evt) {
    //console.log(evt)
    keyAction(evt, true);
}

function keyReleased(evt) {
    keyAction(evt, false);
}

function keyAction(evt, newVal) {
    var player = activeObjects[1];
    index = player.keysHeld.indexOf(evt.keyCode);

    if (newVal && index < 0) {
        player.keysHeld.push(evt.keyCode);
    }
    else {
        player.keysHeld.splice(index, 1);
    }
}

function loadAssets() {
    var assets = [
        "characters/character.png",
        "characters/cat.png",
        "backgrounds/towntileset.png",
    ]

    for (i in assets) {
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
    console.log(activeObjects);
}
function startGame() {
    var framesPerSecond = 30;
    gameloopId = setInterval(gameLoop, 1000 / framesPerSecond);

    //setTimeout(function () {
    //        clearInterval(gameloopId);
    //}, 200);

}

function gameLoop() {
    drawWorld();
    for (i in activeObjects) {
        activeObjects[i].draw();
    }
}