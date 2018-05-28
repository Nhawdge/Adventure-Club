import { Equipment } from "./equipment";
import { IMovement } from "../interfaces/movement";
import { IFighting } from "../interfaces/fighting";

export { Player, Skill, Ability };


class Player implements IFighting, IMovement {

    Health: number;
    Abilities: Array<Ability>;
    Equipment: Equipment;

    constructor() {

    }
    Attack() {
        return 1;
    }

}


class Skill {
    id: string;
    name: string;
    difficulty: number;

    constructor(name, difficulty) {
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