enum Status { Available, Borrowed }

export class Book {
    private title: string
    private author: string
    private pages: number
    private status: Status

    constructor(title: string, author: string, pages: number) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = Status.Available
    }

    borrow() {
        if (this.status === Status.Available) {
            this.status = Status.Borrowed
            console.log(`Book "${this.title}" borrowed.`)
        } else {
            console.log(`Book "${this.title}" is unavailable.`)
        }
    }

    returnBook() {
        if (this.status === Status.Borrowed) {
            this.status = Status.Available
            console.log(`Book "${this.title}" returned.`)
        } else {
            console.log(`Book "${this.title}" was not borrowed.`)
        }
    }

    showInformation() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, status: ${Status[this.status]}`)
    }
}