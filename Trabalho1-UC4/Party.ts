import { Character } from "./Character";

const logger = console.log

export class Party {
    private nameParty: string
    private members: Character[]

    constructor(nameParty: string, members: Character[]) {
        this.nameParty = nameParty
        this.members = []
    }

    public getNameParty() {
        return this.nameParty
    }

    public getMembers() {
        return this.members
    }

    public setNameParty(newName: string) {
        this.nameParty = newName
    }

    public setMember(newMember: []) {
        this.members = newMember
    }

    addParty(character: Character): void {
        if (this.members.length >= 4) {
            logger(`You have reached the maximum number of characters in a party.`)
        } else {
            this.members.push(character)
            console.log(`You added ${character.getName()} to your party.`)
        }
    }

    removeParty(character: Character): void {
        const index = this.members.indexOf(character)
        if (index > -1) {
            this.members.splice(index, 1)
        }
        logger(`You removed ${character.getName()} from your party`)
    }

    showMember(): void {
        logger(`
            ========================
               ${this.nameParty}
            ========================

            Quantity: ${this.members.length} Members
            `)

        this.members.forEach((character, index) => {
            logger(`${index + 1}. ${character.getName()}`)
        })
    }
}
