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
            this.mana -= this.spell.getManaCost()
            logger(`
                    ${this.name} cats ${this.spell.getName()}
                    Damage: ${this.spell.getDamage()}
                    Mana remaining: ${this.mana}
                    `)
        }
        const manaInterval = setInterval(() => {
            if (this.mana < 100) {
                this.mana = Math.min(this.mana + 5, 100);
        
                if (this.mana === 100) {
                    logger(`${this.name} your mana is full`);
                    clearInterval(manaInterval);                             
                } else {
                    logger(`${this.name} restored 5 mana. Now you have ${this.mana}`);
                }
            }
        }, 5000);
    }
}
