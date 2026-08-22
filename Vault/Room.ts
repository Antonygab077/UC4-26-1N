import { ask, logger, question } from "./Main";
import { Resident } from "./Resident";

export class Room {
    private name: string
    private capacity: number
    private residents: Resident[]

    constructor(name: string, capacity: number) {
        this.name = name
        this.capacity = capacity
        this.residents = []
    }

    public getName() {
        return this.name
    }

    public getCapacity() {
        return this.capacity
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setCapacity(newCapacity: number) {
        this.capacity = newCapacity
    }

    addResident(resident: Resident): void {
        if (this.residents.length >= this.capacity) {
            logger(`The room is full.`)
            return
        }

        this.residents.push(resident)
        logger(`${resident.getName()} was added to the room.`)
    }

    removeResident(resident: Resident): void {
        const index = this.residents.indexOf(resident)

        if (index === -1) {
            logger(`Resident not found in this room.`)
            return
        }

        this.residents.splice(index, 1)
        logger(`${resident.getName()} was removed from the room.`)
    }

    listResidents(): void {
        if (this.residents.length === 0) {
            logger("There are no residents in this room.")
            return
        }

        console.log("Residents in the room:")

        this.residents.forEach((resident) => {
            logger(`- ${resident.getName()}`)
        })
    }

    hasResident(resident: Resident): boolean {
        return this.residents.includes(resident)
    }

}