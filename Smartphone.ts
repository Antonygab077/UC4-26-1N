export class Smartphone {
    brand: string
    model: string
    battery: number
  
    constructor(brand: string, model: string) {
      this.brand = brand
      this.model = model
      this.battery = 100
    }
  
    use(minutes: number): void {
      let minutesUsed = 0
  
      const interval = setInterval(() => {
        if (minutesUsed >= minutes || this.battery <= 0) {
          clearInterval(interval)
          return
        }
  
        this.battery -= 1
        minutesUsed++
  
        console.log(`${this.model} used for 1 min. Battery: ${this.battery}%`)
  
        if (this.battery <= 0) {
          this.battery = 0
          console.log(`${this.model} turned off! Battery died.`)
          clearInterval(interval)
        }
      }, 500)
    }
  
    charge(): void {
      setTimeout(() => {
        this.battery = 100
        console.log(`${this.model} charged! Battery: ${this.battery}%`)
      }, 1000)
    }
  
    showInformation(): void {
      console.log(`Brand: ${this.brand}`)
      console.log(`Model: ${this.model}`)
      console.log(`Battery: ${this.battery}%`)
    }
  }