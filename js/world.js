
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
        name: 'town',
        tileSet: 'town',
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    };

    self.draw = function () {
        var tile = self.tilesets.Town.Tiles;
        var tileset = self.tilesets.Town;

        for (row in self.town.grid) {
            for (col in self.town.grid[row]) {
                var itemAtLoc = self.town.grid[row][col];
                var brickLeftEdgeX = col * tileset.TileWidth;
                var brickTopEdgeY = row * tileset.TileHeight;
                var spriteX = 0;
                var spriteY = tileset.TileHeight * itemAtLoc;

                drawSpritemap(tile, brickLeftEdgeX, brickTopEdgeY, spriteX, spriteY, tileset.TileWidth, tileset.TileHeight);

            }
        }
        return
    }

}
