import { ask, logger, question } from "./Main";
import { Resident } from "./Resident";

export class Scientist extends Resident {
    private profession: string

    constructor(name: string, age: number) {
        super(name, age)
        this.profession = `Scientist`
    }

    work(): void {
        logger(`The scientist is conducting research.`)
    }
}