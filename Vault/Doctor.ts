import { ask, logger, question } from "./Main";
import { Resident } from "./Resident";

export class Doctor extends Resident {
    private profession: string

    constructor(name: string, age: number) {
        super(name, age)
        this.profession = `Doctor`
    }

    work(): void {
        logger(`The doctor is seeing patients.`)
    }
}