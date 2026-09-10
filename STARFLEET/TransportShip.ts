import { CargoCarrier } from "../interfaces/CargoCarrier";
import { Spacecraft } from "./Spacecraft";
import { Repairable } from "../interfaces/Repairable";
import { logger } from "../Main";

export class TransportShip extends Spacecraft implements CargoCarrier, Repairable {
    private cargoCapacity: number
    private currentCargo: number

    constructor(name: string, fuel: number, health: number) {
        super(name, fuel, health)
        this.cargoCapacity = 300
        this.currentCargo = 0
    }

    getCargoCapacity(): number {
        return this.cargoCapacity
    }
    getCurrentCargo(): number {
        return this.currentCargo
    }

    loadCargo(amount: number): void {
        if((this.currentCargo + amount) > this.cargoCapacity) {
            logger(`You cannot exceed the maximum load capacity.`)
        } else {
            this.currentCargo += amount
            logger(`You added ${amount} kg to your load. You are now carrying: ${this.currentCargo}`)
        }
    }

    unloadCargo(amount: number): void {
        if(amount > this.currentCargo) {
            logger(`You can't take away what you don't already have.`)
        } else {
            this.currentCargo -= amount
            logger(`You removed another ${amount} kg to your load. You are now carrying: ${this.currentCargo}`)
        }
    }

    getRepairCost(): number {
        return 100
    }
}