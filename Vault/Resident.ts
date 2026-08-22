import { log } from "node:console";
import { ask, logger, question } from "./Main";

export class Resident {
    protected name: string
    protected age: number
    
    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setAge(newAge: number) {
        this.age = newAge
    }

    work(): void {}
}