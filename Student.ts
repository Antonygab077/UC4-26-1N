let media: number = 0

export class Student {
    private name: string
    private grade1: number
    private grade2: number

    constructor(name: string, grade1: number, grade2: number) {
        this.name = name
        this.grade1 = grade1
        this.grade2 = grade2
    }

    calculateAverage(): void {
        const sum = this.grade1 + this.grade2
        media = sum / 2
        console.log(`Your average is: ${media}`)
    }

    approved(): void {
        if(media >= 7) {
            console.log(`Congratulations ${this.name}, you've been approved!`)
        } else {
            console.log(`${this.name} You failed.`)
        }
    }
}
