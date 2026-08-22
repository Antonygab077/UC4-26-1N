import { ask, logger, question } from "./Main";
import { Resident } from "./Resident";

export class Engineer extends Resident {
    private profession: string

    constructor(name: string, age: number) {
        super(name, age)
        this.profession = `Engineer`
    }

    work(): void {
        logger(`The engineer is calculating.`)
    }
}