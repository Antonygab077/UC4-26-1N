import { Spacecraft } from "../ships/Spacecraft";

export interface CombatCapable {
    attack(target: Spacecraft): number;
}