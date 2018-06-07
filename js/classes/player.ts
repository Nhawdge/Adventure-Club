import { Equipment } from "./equipment";
import { IMovement } from "../interfaces/movement";
import { IFighting } from "../interfaces/fighting";

export { Player, Skill, Ability };


class Player implements IFighting, IMovement {

    Health: number;
    Abilities: Array<Ability>;
    Equipment: Equipment;

    Position:{};
    keysHeld : Array<number>;
    controls: object;

    constructor() {
        this.Position = { x: 0, y: 0 };
        this.keysHeld = [];
        this.controls = { Left: 65, Up: 87, Right: 68, Down: 83, };
    };

    Attack() {
        return 1;
    };
    Draw() {
        this.Move();
        drawBitmapCenteredWithRotation(self.sprite, this.Position.x,  this.Position.y, 0);
        return
    };

    Move() {
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

}


class Skill {
    id: string;
    name: string;
    difficulty: number;

    constructor(name: string, difficulty: number) {
        this.name = name;
        this.difficulty = difficulty;
    }
}

class Ability {
    skills: Array<Skill>;
    name: string;

    constructor(AbilityData: object, Skills: Array<Skill>) {

    }
}