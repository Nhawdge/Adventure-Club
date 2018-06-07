function oldPlayer(name) {
    self = this;

    self.name = name;
    self.spriteSelected = "character"
    self.sprite = activeAssets.find(function(elem) { return elem.id == self.spriteSelected})
    
    self.skills = playerSkills();
    self.attributes = { speed: 5};

    // Using WASD
    self.controls = { Left: 65, Up: 87, Right: 68, Down: 83, };
    self.keysHeld = [];
    self.position = { x: 10, y: 10, angle: 0, };

    self.move = function() {
        //console.log("moving", self.keysHeld);
        if (self.keysHeld.includes(self.controls.Left)){
            self.position.x -= self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Right)){
            self.position.x += self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Down)){
            self.position.y += self.attributes.speed;
        }
        if (self.keysHeld.includes(self.controls.Up)){
            self.position.y -= self.attributes.speed;
        }
    }

    self.draw = function () {
        // Called every loop (30 per second);
        self.move();
        drawBitmapCenteredWithRotation(self.sprite, self.position.x,  self.position.y, 0);
    }
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
    }
}

function playerSkills() {
    return {
        Fighting: new Skill({ id: 1, name: 'Fighting', difficulty: 1 }),
        Healing: new Skill({ id: 2, name: 'Healing', difficulty: 1 }),
        Blocking: new Skill({ id: 3, name: 'Blocking', difficulty: 1 }),
    }
}