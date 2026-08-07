export class Car {
    private brand: string
    private model: string
    private year: number
    private speed: number

    constructor(brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = 0
    }

    accelerate(value: number) {
        if (value < 0) {
            console.log(`This is a method to speed things up, so speed it up.`)
        } else {
            this.speed = value
            console.log(`Its speed is: ${this.speed}`)
        }
    }

    brake(value: number) {
        if (this.speed < value) {
            console.log(`Error: your speed cannot be negative.`)
        } else {
            this.speed = this.speed - value
            console.log(`Your speed is now: ${this.speed}`)
        }
    }

    showInformation(): void {
        console.log(`Brand: ${this.brand}; Model: ${this.model}; Year: ${this.year}; Speed: ${this.speed}`)
    }
}