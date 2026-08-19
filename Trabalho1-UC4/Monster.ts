import { Character } from "./Character"

const logger = console.log

export class Monster {
    private name: string
    private level: number
    private health: number
    private damage: number

    constructor(name: string, level: number, health: number, damage: number) {
        this.name = name
        this.level = level
        this.health = health
        this.damage = damage
    }

    //GETTERS
    getName(): string {
        return this.name
    }

    getLevel(): number {
        return this.level
    }

    getHealth(): number {
        return this.health
    }

    getDamage(): number {
        return this.damage
    }

    //SETTERS
    setName(newName: string): void {
        this.name = newName
    }

    setLevel(newLevel: number): void {
        this.level = newLevel
    }

    setHealth(newHealth: number): void {
        this.health = newHealth
    }

    setDamage(newDamage: number): void {
        this.damage = newDamage
    }

    showInfo(): void {
        logger(`
        ========================
               Monster
        ========================
        Name: ${this.name}
        Level: ${this.level}
        Health: ${this.health}
        `)
    }

    attack(character: Character): void {
        const damage = Math.floor(Math.random() * (this.damage - 10 + 1)) + 10
        character.setHealth(character.getHealth() - damage)
        logger(`
    ${this.name} attacks ${character.getName()}!
    ${this.damage} damage dealt!
    ${character.getName()} has ${character.getHealth()} HP remaining.
            `)
    }
}