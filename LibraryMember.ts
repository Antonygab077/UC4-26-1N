export class LibraryMember {
    private name: string
    private borrowedBook: number

    constructor(name: string) {
        this.name = name
        this.borrowedBook = 0
    }

    public borrowBook(): void {
        if(this.borrowedBook > 3) {
            console.log(`Book limit reached`)
        } else {
            this.borrowedBook++
            console.log(`Borrowed Book`);
        }
    }

    public returnBook(): void {
        if(this.borrowedBook <= 0) {
            console.log(`No borrowed books`)
        } else {
            this.borrowedBook -= 1
            console.log(`Book returned`)
        }
    }

    public showInformation(): void {
        console.log(`Book: ${this.name}, Borrowed: ${this.borrowedBook}`)
    }
}