type rating = 0 | 1 | 2 | 3 | 4 | 5| 6 | 7 | 8 | 9 | 10

export class Movie {
    private tittle: string
    private duration: string
    private rating: number

    constructor(tittle: string, duration: string, rating: number) {
        this.tittle = tittle
        this.duration = duration
        this.rating = rating
    }

    changeRating(newRating: rating) {
        this.rating = newRating
        console.log(`Your movie rating has been changed to ${newRating}`)
    }

    showMovie(): void {
        console.log(`The film ${this.tittle} has a runtime of ${this.duration} and a rating of ${this.rating}`)
    }
}