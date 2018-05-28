import { Equipment } from "../classes/equipment";
import { Ability } from "../classes/player";

export interface IFighting {
    Health: number;
    Attack() : number;
    Abilities : Array<Ability>;
    Equipment : Equipment;
}
