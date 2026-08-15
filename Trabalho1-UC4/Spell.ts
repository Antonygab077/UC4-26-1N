const logger = console.log

export class Spell {
    private name: string
    private damage: number
    private manaCost: number

    public constructor(name: string, damage: number, manaCost: number) {
        this.name = name
        this.damage = damage
        this.manaCost = manaCost
    }

    //GETTERS
    public getName() {
        return this.name
    }

    public getDamage() {
        return this.damage
    }

    public getManaCost() {
        return this.manaCost
    }

    //SETTERS
    public setName(newName: string) {
        this.name = newName
    }

    public setDamage(newDamage: number) {
        this.damage = newDamage
    }

    public setManaCost(newManaCost: number) {
        this.manaCost = newManaCost
    }

    public showInfo(): void {
        logger(`
            ========================
                    Spell
            ========================
            Name: ${this.name}
            Damage: ${this.damage}
            Mana Cost: ${this.manaCost}
            `)
    }
}