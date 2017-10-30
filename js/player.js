function Player(name) {
    self = this;

    self.name = name;
    self.spriteSelected = "character"
    self.sprite = activeAssets.find(function(elem) { return elem.id == self.spriteSelected})
    
    // Using WASD
    self.controls = { Left: 65, Up: 87, Right: 68, Down: 83, };
    self.position = { x: 10, y: 10, angle: 0, };

    self.skills = playerSkills();

    self.draw = function () {
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