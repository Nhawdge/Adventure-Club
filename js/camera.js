
function cameraFollow() {
    var cameraFocusCenterX = camPanX + canvas.width / 2;
    var cameraFocusCenterY = camPanY + canvas.height / 2;

    var playerDistFromCameraFocusX = Math.abs(activeObjects[1].position.x - cameraFocusCenterX);
    var playerDistFromCameraFocusY = Math.abs(activeObjects[1].position.y - cameraFocusCenterY);

    if (playerDistFromCameraFocusX > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X) {
      if (cameraFocusCenterX < activeObjects[1].position.x) {
        camPanX += 5;
      } else {
        camPanX -= 5;
      }
    }
    if (playerDistFromCameraFocusY > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y) {
      if (cameraFocusCenterY < activeObjects[1].position.y) {
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