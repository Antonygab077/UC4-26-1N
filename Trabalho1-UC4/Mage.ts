import { Character } from "./Character";
import { Spell } from "./Spell";

const logger = console.log

export class Mage extends Character {
    private mana: number
    private spell: Spell

    constructor(name: string, level: number, health: number, mana: number, spell: Spell) {
        super(name, level, health)
        this.mana = mana
        this.spell = spell
    }

    //GETTERS
    public getMana() {
        return this.mana
    }

    public getSpell() {
        return this.spell
    }

    //SETTERS
    public setMana(newMana: number) {
        this.mana = newMana
    }

    public setSpell(newSpell: Spell) {
        this.spell = newSpell
    }

    castSpell(): void {
        if (this.mana < this.spell.getManaCost()) {
            logger(`Insufficient mana to use this spell.`)
        } else {
            this.mana -= this.spell.getManaCost()                               //Quero colocar o sistema de restaurar mana usando setInterval
            logger(`
                    ${this.name} cats ${this.spell.getName()}
                    Damage: ${this.spell.getDamage()}
                    Mana remaining: ${this.mana}
                    `)
        }
    }
}