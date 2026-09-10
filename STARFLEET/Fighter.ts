import { CombatCapable } from "../interfaces/CombatCapable";
import { Spacecraft } from "./Spacecraft";
import { Repairable } from "../interfaces/Repairable";
import { logger } from "../Main";

export class Figther extends Spacecraft implements CombatCapable, Repairable {
    private weaponPower: number

    constructor(weaponPower: number, name: string, fuel: number, health: number) {
        super(name, fuel, health)
        this.weaponPower = weaponPower
    }

    attack(target: Spacecraft): number {
        if (this.isOperational() === false) {
            logger(`Your ship is not operational.`)
            return 0
        }

        let damage = Math.floor(Math.random() * 15) + 30

        target.takeDamage(damage)

        return damage
    }

    getRepairCost(): number {
        return 100
    }
}