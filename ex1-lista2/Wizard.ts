import { Spell } from "./Spell"
import { House } from "./House"

export class Wizard {
    private name: string
    private house: House
    private mana: number
    private maxMana: number
    private spells: Spell[]

    public constructor(name: string, house: House, mana: number = 100) {
        this.name = name
        this.house = house
        this.mana = mana
        this.maxMana = mana
        this.spells = []
    }

    public learnMagic(magic: Spell): void {
        const alreadyKnows = this.spells.some(spell => spell.getName() === magic.getName())

        if (alreadyKnows) {
            console.log(`${this.name} already knows ${magic.getName()}.`)
            return
        }

        this.spells.push(magic)
        console.log(`${magic.getName()} was learned.`)
    }

    public knowsMagic(magicName: string): boolean {
        return this.spells.some(spell => spell.getName() === magicName)
    }

    public allMagics(): void {
        this.spells.forEach(magic => {
            console.log(magic.showInformation())
        })
    }

    public useMagic(magicName: string): boolean {
        if (!this.knowsMagic(magicName)) {
            console.log(`${this.name} doesn't know the spell ${magicName}.`)
            return false
        }

        const spell = this.spells.find(spell => spell.getName() === magicName) as Spell

        if (!spell.manaCheck(this.mana)) {
            return false
        }

        this.mana -= spell.getManaCost()
        console.log(`${this.name} used ${magicName} and dealt ${spell.getDamage()} damage. Remaining mana: ${this.mana}`)
        return true
    }

    public restoreMana(amount: number): void {
        this.mana = Math.min(this.mana + amount, this.maxMana)
        console.log(`${this.name} restored mana. Current mana: ${this.mana}`)
    }

    public showInformation(): string {
        return `Name: ${this.name}. ${this.house.showInformation()}. Mana: ${this.mana}. Known spells: ${this.spells.length}`
    }
}