import { Spacecraft } from "./Spacecraft"
import { Exploratory } from "../interfaces/Exploratory"
import { Repairable } from "../interfaces/Repairable"

export class ExplorationShip extends Spacecraft implements Exploratory, Repairable {

    constructor(name: string, fuel: number, health: number) {
        super(name, fuel, health)
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