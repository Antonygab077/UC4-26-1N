export class Person {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public setName(name: string): void {
        this.name = name
    }

    public setAge(age: number): void {
        this.age = age
    }

    introduce(): void {
        console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`)
    }
}