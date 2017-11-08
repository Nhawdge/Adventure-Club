function colorRect(topleftX, topleftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor
    canvasContext.fillRect(topleftX, topleftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true)
    canvasContext.fill();
}

function colorText(words, textX, textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(words, textX, textY)
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
    canvasContext.drawImage(useBitmap, spriteX, spriteY, spriteWidth, spriteHeight, 
                            0, 0, spriteWidth, spriteHeight);
    canvasContext.restore();
}

function clearScreen() {
    colorRect(0, 0, canvas.width, canvas.height, 'white');
}

