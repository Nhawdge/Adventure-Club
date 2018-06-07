import { Equipment } from "./equipment";
import { IMovement } from "../interfaces/movement";
import { IFighting } from "../interfaces/fighting";

export { Player, Skill, Ability };


class Player implements IFighting, IMovement {

    Health: number;
    Abilities: Array<Ability>;
    Equipment: Equipment;

    Position:{};

    constructor() {
        this.Position = { x: 0, y: 0 };
    }
    Attack() {
        return 1;
    }
    Draw() {
        return
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