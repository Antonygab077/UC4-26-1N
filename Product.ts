export class Product {
    private name: string
    private price: number
    private stock: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
        this.stock = 0
    }

    addStock(quantity: number) {
        if(quantity < 0) {
            console.log(`Invalid Value.`)
        } else {
            this.stock += quantity
            console.log(`You added: ${quantity}; Your current stock: ${this.stock}`)
        }
    }

    removeStock(quantity: number) {
        if(quantity > this.stock) {
            console.log(`Invalid Value.`)
        } else {
            this.stock = this.stock - quantity
            console.log(`You removed: ${quantity}; Your current stock: ${this.stock}`)
        }
    }

    showProduct(): void {
        console.log(`Product: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}`)
    }
}