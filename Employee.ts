let increase: number = 0
let totalNow: number = 0

export class Employee {
    private name: string
    private salary: number

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary
    }

    increaseSalary(percent: number) {
        increase = percent
        totalNow = this.salary * (1 + percent / 100)
    }

    showInformation(): void {
        console.log(`The employee ${this.name} had their salary of ${this.salary} increased by ${increase} percent. Current total: ${totalNow}`)
    }
}