import { Spacecraft } from "./Spacecraft"
import { CombatCapable } from "../interfaces/CombatCapable"
import { CargoCarrier } from "../interfaces/CargoCarrier"
import { Exploratory } from "../interfaces/Exploratory"
import { Repairable } from "../interfaces/Repairable"
import { logger } from "../Main"

export class MultiPurposeShip extends Spacecraft implements CombatCapable, CargoCarrier, Exploratory, Repairable {
    private weaponPower: number
    private cargoCapacity: number
    private currentCargo: number

    constructor(weaponPower: number, cargoCapacity: number, currentCargo: number, name: string, fuel: number, health: number) {
        super(name, fuel, health)
        this.weaponPower = weaponPower
        this.cargoCapacity = cargoCapacity
        this.currentCargo = currentCargo
    }

    getCargoCapacity(): number {
        return this.cargoCapacity
    }

    getCurrentCargo(): number {
        return this.currentCargo
    }

    attack(target: Spacecraft): number {
        if (!this.isOperational()) {
            return 0
        }

        const damage = this.weaponPower
        target.takeDamage(damage)

        return damage
    }

    loadCargo(amount: number): void {
        if (this.currentCargo + amount > this.cargoCapacity) {
            logger(`You cannot exceed the maximum capacity.`)
        } else {
            this.currentCargo += amount
            logger(`You added ${amount} kg to your load. You are now carrying: ${this.currentCargo}`)
        }
    }

    unloadCargo(amount: number): void {

        if (amount > this.currentCargo) {
            logger(`You attempted to withdraw an invalid amount.`)
        } else {
            this.currentCargo -= amount
            logger(`You removed ${amount} kg from your load.`)
        }
    }

    collectData(): string {
        return `${this.getName()} collected scientific data.`
    }

    explore(location: string): string {
        const fuelCost = Math.floor(Math.random() * 15) + 20

        if (this.getFuel() < fuelCost) {
            return `Insufficient fuel quantity.`
        }

        this.consumeFuel(fuelCost)

        return `The spacecraft ${this.getName()} explored ${location} and that cost ${fuelCost} in fuel.`
    }

    getRepairCost(): number {
        return 100
    }
}