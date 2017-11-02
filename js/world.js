
function World(world) {
    var self = this;
    self.tilesets = {
        Town: {
            Tiles: activeAssets.find(function (elem) { return elem.id == "towntileset" }),
            TileHeight: 40,
            TileWidth: 40,
            Grass: 0,
            Path: 1,
            Wall: 2,
            House: 3
        },
        Forest: {
            Tiles: activeAssets.find(function (elem) { return elem.id == "foresttileset" }),
            TileHeight: 40,
            TileWidth: 40,
            Grass: 0,
            Path: 1,
            Trees: 2
        }
    }

    self.town = {
        rows: 20,
        cols: 15,
        name: 'town',
        tileSet: 'town',
        grid: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };

    self.draw = function () {
        var tile = self.tilesets.Town.Tiles;
        var tileset = self.tilesets.Town;
        for (var Col = 0; Col < self.town.cols; Col++) { // in  column...
            for (var Row = 0; Row < self.town.rows; Row++) { // in  row within that col      
                //if (isBrickAtTileCoord(Col, Row)) {
                var brickLeftEdgeX = Col * tileset.TileWidth;
                var brickTopEdgeY = Row * tileset.TileHeight;
                var spriteX =  0;
                var spriteY = 40;

                drawSpritemap(tile, brickLeftEdgeX, brickTopEdgeY, spriteX, spriteY, tileset.TileWidth, tileset.TileHeight);
                // colorRect(brickLeftEdgeX, brickTopEdgeY,
                //   BRICK_W - BRICK_GAP, BRICK_H - BRICK_GAP, 'blue');
                //} // end of isBrickAtTileCoord()
            } // end of for Row
        } // end of for Col
    } // end of drawBricks()
}
