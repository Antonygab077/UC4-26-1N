import { Character } from "./Character";
import { Weapon } from "./Weapon";

const logger = console.log

export class Warrior extends Character {
    private strength: number
    private weapon: Weapon

    constructor(name: string, level: number, health: number, strength: number, weapon: Weapon) {
        super(name, level, health)
        this.strength = strength
        this.weapon = weapon
    }

    //GETTERS
    public getStrength() {
        return this.strength
    }

    public getWeapon() {
        return this.weapon
    }

    //SETTERS
    public setStrength(newStrength: number) {
        this.strength = newStrength
    }

    public setWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon
    }

    attack(): void {
        logger(`
            ${this.name} attacks with ${this.weapon.getName()}!
            Damage:  ${this.weapon.getDamage()}
            `)
    }
}