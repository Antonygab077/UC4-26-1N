export class House {
    private name: string
    private founder: string
    private points: number

    public constructor(name: string, founder: string) {
        this.name = name
        this.founder = founder
        this.points = 0
    }

    public addPoints(points: number): void {
        this.points += points
        console.log(`${this.name} gained ${points} points. Total: ${this.points}`)
    }

    public removePoints(points: number): void {
        this.points -= points
        console.log(`${this.name} lost ${points} points. Total: ${this.points}`)
    }

    public showInformation(): string {
        return `House: ${this.name}. Founder: ${this.founder}. Points: ${this.points}`
    }
}