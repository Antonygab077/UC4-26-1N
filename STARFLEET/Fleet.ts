import { Spacecraft } from "../ships/Spacecraft"
import { CombatCapable } from "../interfaces/CombatCapable"
import { CargoCarrier } from "../interfaces/CargoCarrier"
import { Exploratory } from "../interfaces/Exploratory"

export class Fleet {
    private ships: Spacecraft[]

    constructor() {
        this.ships = []
    }

    addShip(ship: Spacecraft): void {
        this.ships.push(ship)
    }

    removeShip(id: number): void {
        const index = this.ships.findIndex(ship => ship.getId() === id)
        if (index !== -1) {
            this.ships.splice(index, 1)
        }
    }

    findShip(id: number): Spacecraft | undefined {
        return this.ships.find(ship => ship.getId() === id)
    }

    showFleet(): void {
        this.ships.forEach(ship => {
            ship.showStatus()
        })
    }

    getCombatShips(): (Spacecraft & CombatCapable)[] {
        return this.ships.filter((ship): ship is Spacecraft & CombatCapable =>
            "attack" in ship && typeof ship.attack === "function"
        )
    }
    
    getCargoShips(): (Spacecraft & CargoCarrier)[] {
        return this.ships.filter((ship): ship is Spacecraft & CargoCarrier =>
            "loadCargo" in ship && typeof ship.loadCargo === "function"
        )
    }
    
    getExplorationShips(): (Spacecraft & Exploratory)[] {
        return this.ships.filter((ship): ship is Spacecraft & Exploratory =>
            "explore" in ship && typeof ship.explore === "function"
        )
    }
}