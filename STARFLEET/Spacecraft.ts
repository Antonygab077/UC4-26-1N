import { logger } from "../Main";

export abstract class Spacecraft {
    private static nextId: number = 1
    private id: number
    private name: string
    private fuel: number
    private health: number
    private maxHealth: number

    constructor(name: string, fuel: number, health: number) {
        this.id = Spacecraft.nextId++
        this.name = name
        this.fuel = fuel
        if (health < 0) {
            this.health = 100
            logger(`You tried to enter an invalid value. It will default to 100.`)
        } else if (health > 150) {
            this.health = 150
        } else {
            this.health = health
        }
        this.maxHealth = this.health

    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getFuel(): number {
        return this.fuel
    }

    getHealth(): number {
        return this.health
    }

    setHealth(newHealth: number) {
        this.health = newHealth
    }

    refuel(): void {
        const fuelInterval = setInterval(() => {
            if (this.fuel < 100) {
                this.fuel = Math.min(this.fuel + 5, 100);

                if (this.fuel === 100) {
                    logger(`${this.name} your fuel is full`);
                    clearInterval(fuelInterval);
                } else {
                    logger(`${this.name} restored 5 fuel. Now you have ${this.fuel}`);
                }
            }
        }, 2000);
    }

    takeDamage(amount: number): void {
        if (amount >= 0) {
            this.health -= amount
            logger(`${this.name} lost ${amount} health points.`)
            if (this.health <= 0) {
                this.health = 0
                logger(`${this.name} died.`)
            }
        }
    }

    repair(): void {
        const healthInterval = setInterval(() => {
            if (this.health < this.maxHealth) {
                this.health = Math.min(this.health + 5, this.maxHealth);

                if (this.health === this.maxHealth) {
                    logger(`${this.name} your health is full`);
                    clearInterval(healthInterval);
                } else {
                    logger(`${this.name} restored 5 health. Now you have ${this.health}`);
                }
            }
        }, 2000);
    }

    showStatus(): void {
        logger(`
        ================================
                SPACECRAFT SYSTEM
        ================================
        > ID        : ${this.id}
        > NAME      : ${this.name}
        > FUEL      : ${this.fuel}
        > HEALTH    : ${this.health}
        ================================
              SYSTEM STATUS ONLINE
        ================================
        `)
    }

    isOperational(): boolean {
        if (this.fuel > 0 && this.health > 0) {
            logger(`It is operational.`)
            return true
        } else {
            logger(`It is not operational.`)
            return false
        }
    }

    consumeFuel(amount: number): void {
        if(amount > this.fuel) {
            this.fuel = 0
        } else {
            this.fuel -= amount
        }
    }
}