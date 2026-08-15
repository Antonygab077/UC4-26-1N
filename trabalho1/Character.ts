const logger = console.log

export class Character {
    protected name: string
    protected level: number
    protected health: number

    public constructor(name: string, level: number, health: number) {
        this.name = name
        this.level = level
        this.health = health
    }

    //GETTERS
    public getName() {
        return this.name
    }

    public getLevel() {
        return this.level
    }

    public getHealth() {
        return this.health
    }

    //SETTERS
    public setName(newName: string) {
        this.name = newName
    }

    public setLevel(newLevel: number) {
        this.level = newLevel
    }

    public setHealth(newHealth: number) {
        this.health = newHealth
    }

    //Show info of character
    showInfo(): void {
        logger(`
        ========================
               Character
        ========================
        Name: ${this.name}
        Level: ${this.level}
        Health: ${this.health}
        `)
    }

    //Remove life / receive damage
    takeDamage(amount: number): string {         //Quero colocar um math.random para para atacar eh aq entt acho q aq eu vou ter q receber o dano do metodo de ataque
        if (amount >= 0) {                      //Ainda preciso mostrar oq acontece se a vida chegar a 0
            this.health -= amount
            return `You lost ${amount} health points. Your life now is: ${this.health}`
        } else {
            return ``
        }
    }
}