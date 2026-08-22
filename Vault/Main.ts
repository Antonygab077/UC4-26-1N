import { Doctor } from "./Doctor"
import { Engineer } from "./Engineer"
import { Resident } from "./Resident"
import { Scientist } from "./Scientist"
import { Soldier } from "./Soldier"
import { Room } from "./Room"
import { Vault } from "./Vault"

export const ask = require(`readline-sync`)
export const logger = console.log
export const question = ask.question

function pause(): void {
    question(`\nPress ENTER to continue...`)
}

const doctor1 = new Doctor(`Alfonso`, 32)
const engineer1 = new Engineer(`Kleber`, 37)
const soldier1 = new Soldier(`Joao`, 18)
const scientist1 = new Scientist(`Amelia`, 49)

const reactor = new Room(`Reactor`, 8)
const purifier = new Room(`Purifier`, 4)
const plantation = new Room(`Plantation`, 5)
const infirmary = new Room(`infirmary`, 2)
const workshop = new Room(`Workshop`, 3)
const bedroom = new Room(`Bedroom`, 30)

const vault = new Vault()

vault.addRoom(reactor)
vault.addRoom(purifier)
vault.addRoom(plantation)
vault.addRoom(infirmary)
vault.addRoom(workshop)
vault.addRoom(bedroom)

vault.addResident(doctor1)
vault.addResident(engineer1)
vault.addResident(soldier1)
vault.addResident(scientist1)

let option: number

do {
    console.clear()

    logger(`
=========================
        VAULT MENU
=========================

1 - Register Resident
2 - List Residents
3 - Register Room
4 - List Rooms
5 - Allocate Resident
6 - Remove Resident From Room
7 - List Residents From Room
0 - Exit

=========================
`)

    option = Number(question(`Choose an option: `))

    console.clear()

    switch (option) {
        case 1: {
            const residentName = question(`Enter resident name: `)

            const residentAge = Number(
                question(`Enter resident age: `)
            )

            if (residentName === `` || residentAge <= 0 || isNaN(residentAge)) {
                logger(`Invalid resident data.`)
                pause()
                break
            }


            logger(`
Choose resident type:

1 - Doctor
2 - Engineer
3 - Soldier
4 - Scientist
        `)

            const residentType = Number(
                question(`Choose the resident type: `)
            )

            let newResident: Resident | null = null

            switch (residentType) {
                case 1:
                    newResident = new Doctor(residentName, residentAge)
                    break

                case 2:
                    newResident = new Engineer(residentName, residentAge)
                    break

                case 3:
                    newResident = new Soldier(residentName, residentAge)
                    break

                case 4:
                    newResident = new Scientist(residentName, residentAge)
                    break

                default:
                    logger(`Invalid resident type.`)
            }

            if (newResident !== null) {
                vault.addResident(newResident)
            }

            pause()
            break
        }

        case 2: {
            vault.listResidents()

            pause()
            break
        }

            case 3: {
            const roomName = question(`Enter room name: `)

            const roomCapacity = Number(
                question(`Enter room capacity: `)
            )

            if (roomName === `` || roomCapacity <= 0 || isNaN(roomCapacity)) {
                logger(`Invalid room data.`)
                pause()
                break
            }

            const newRoom = new Room(roomName, roomCapacity)

            vault.addRoom(newRoom)

            pause()
            break
        }

        case 4: {
        vault.listRooms()

        pause()
        break
    }

        case 5: {
        vault.listResidents()

        const residentOption = Number(
            question(`Choose the resident number: `)
        )

        console.clear()

        vault.listRooms()

        const roomOption = Number(
            question(`Choose the room number: `)
        )

        const resident =
            vault.getResidents()[residentOption - 1]

        const room =
            vault.getRooms()[roomOption - 1]

        if (!resident || !room) {
            logger(`Invalid resident or room.`)
            pause()
            break
        }

        console.clear()

        vault.allocateResident(resident, room)

        pause()
        break
    }

        case 6: {
        vault.listResidents()

        const residentRemoveOption = Number(
            question(`Choose the resident number: `)
        )

        console.clear()

        vault.listRooms()

        const roomRemoveOption = Number(
            question(`Choose the room number: `)
        )

        const residentToRemove =
            vault.getResidents()[residentRemoveOption - 1]

        const roomToRemoveFrom =
            vault.getRooms()[roomRemoveOption - 1]

        if (!residentToRemove || !roomToRemoveFrom) {
            logger(`Invalid resident or room.`)
            pause()
            break
        }

        console.clear()

        vault.removeResidentFromRoom(
            residentToRemove,
            roomToRemoveFrom
        )

        pause()
        break
    }

        case 7: {
        vault.listRooms()

        const roomListOption = Number(
            question(`Choose the room number: `)
        )

        const selectedRoom =
            vault.getRooms()[roomListOption - 1]

        if (!selectedRoom) {
            logger(`Invalid room.`)
            pause()
            break
        }

        console.clear()

        vault.listResidentsFromRoom(selectedRoom)

        pause()
        break
    }

        case 0: {
        logger(`Exiting...`)
        break
    }

        default: {
        logger(`Invalid option.`)

        pause()
        break
    }
}

} while (option !== 0)