import { ask, logger, question } from "./Main";

import { Resident } from "./Resident"
import { Room } from "./Room"

export class Vault {
    private residents: Resident[]
    private rooms: Room[]

    constructor() {
        this.residents = []
        this.rooms = []
    }

    getResidents(): Resident[] {
        return this.residents
    }

    getRooms(): Room[] {
        return this.rooms
    }

    addResident(resident: Resident): void {
        this.residents.push(resident)
        logger(`${resident.getName()} was added to the vault.`)
    }

    addRoom(room: Room): void {
        this.rooms.push(room)
        logger(`${room.getName()} was added to the vault.`)
    }

    listResidents(): void {
        if (this.residents.length === 0) {
            logger(`There are no residents in the vault.`)
            return
        }

        logger(`Residents in the vault:`)

        this.residents.forEach((resident, index) => {
            logger(`${index + 1} - ${resident.getName()}`)
        })
    }

    listRooms(): void {
        if (this.rooms.length === 0) {
            logger(`There are no rooms in the vault.`)
            return
        }

        logger(`Rooms in the vault:`)

        this.rooms.forEach((room, index) => {
            logger(`${index + 1} - ${room.getName()}`)
        })
    }

    allocateResident(resident: Resident, room: Room): void {
    if (!this.residents.includes(resident)) {
        logger(`This resident is not registered in the vault.`)
        return
    }

    if (!this.rooms.includes(room)) {
        logger(`This room is not registered in the vault.`)
        return
    }

    for (let currentRoom of this.rooms) {
        if (currentRoom.hasResident(resident)) {
            logger(`${resident.getName()} is already allocated to a room.`)
            return
        }
    }

    room.addResident(resident)
}

    removeResidentFromRoom(resident: Resident, room: Room): void {
        if (!this.rooms.includes(room)) {
            logger(`This room is not registered in the vault.`)
            return
        }

        room.removeResident(resident)
    }

    listResidentsFromRoom(room: Room): void {
        if (!this.rooms.includes(room)) {
            logger(`This room is not registered in the vault.`)
            return
        }

        room.listResidents()
    }
}