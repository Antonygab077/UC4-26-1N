export class BankAccount {
    private owner: string
    private balance: number

    constructor(owner: string, balance: number) {
        this.owner = owner
        this.balance = balance
    }

    public setOwner(owner: string) {
        this.owner = owner
    }

    public setBalance(balance: number) {
        if (balance < 0) {
            console.log(`Invalid Value.`)
        } else {
            this.balance = balance
            console.log(`Your current balance is: ${this.balance}`)
        }
    }

    deposit(value: number) {
        if (value <= 0) {
            console.log(`Invalid Value.`)
        } else {
            this.balance += value
            console.log(`You deposited: ${value}; Your current balance is: ${this.balance}`)
        }
    }

    withdraw(value: number) {
        if (value > this.balance) {
            console.log(`You cannot withdraw more than you have.`)
        } else {
            this.balance = this.balance - value
            console.log(`You withdrew: ${value}; Your current balance is: ${this.balance}`)
        }
    }

    showBalance(): void {
        console.log(`Your name is: ${this.owner} Your current balance is: ${this.balance}`)
    }
}