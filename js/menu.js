// Menu Bar

function loadMenu() {
    // Show a menu before the game loads

    //Start game
    //Load Game
    //About

    clearScreen();

    var menuOptions = [
        { title: "Start Game" }, { title: "About Game" }
    ];


    for (i in menuOptions) {
        colorRect(canvas.width / 2, canvas.height / 2 + (i * 60), 80, 40, "black");
        colorRect(canvas.width / 2 + 2, canvas.height / 2 + 2 + (i * 60), 76, 36, "white");

        colorText(menuOptions[i].title, canvas.width / 2 + 10, canvas.height / 2 + 20 + (i * 60), "black");
    }
}