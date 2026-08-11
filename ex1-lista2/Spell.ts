export class Spell {
    private name: string
    private damage: number
    private manaCost: number

    public constructor(name: string, damage: number, manaCost: number) {
        this.name = name
        this.damage = damage
        this.manaCost = manaCost
    }

    public getName() {
        return this.name
    }

    public getDamage() {
        return this.damage
    }

    public getManaCost() {
        return this.manaCost
    }

    public showInformation(): string {
        return `Name: ${this.name}. Damage: ${this.damage}. Mana Cost: ${this.manaCost}`
    }

    public newDamage(newDamage: number): void {
        if (newDamage > 0) {
            this.damage = newDamage
            console.log(`Its damage has been changed to: ${newDamage}`)
        } else {
            console.log(`Invalid Damage.`)
        }
    }

    // Agora so verifica, nao mexe em mais nada. Quem desconta a mana e o Wizard.
    public manaCheck(currentMana: number): boolean {
        if (currentMana >= this.manaCost) {
            return true
        } else {
            console.log(`You don't have enough mana for that attack.`)
            return false
        }
    }
}