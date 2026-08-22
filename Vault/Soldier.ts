import { ask, logger, question } from "./Main";
import { Resident } from "./Resident";

export class Soldier extends Resident {
    private profession: string

    constructor(name: string, age: number) {
        super(name, age)
        this.profession = `Soldier`
    }

    work(): void {
        logger(`The soldier is training.`)
    }
}