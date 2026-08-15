const logger = console.log

export class Weapon {
    protected name: string
    protected damage: number

    constructor(name: string, damage: number) {
        this.name = name
        this.damage = damage
    }

    //GETTERS
    public getName() {
        return this.name
    }

    public getDamage() {
        return this.damage
    }

    //SETTERS
    public setName(newName: string) {
        this.name = newName
    }

    public setDamage(newDamage: number) {
        this.damage = newDamage
    }

    showInfo() {
        logger(`
            =======================
                    Weapon
            =======================
            Name: ${this.name}
            Damage: ${this.damage}
            `)
    }
}