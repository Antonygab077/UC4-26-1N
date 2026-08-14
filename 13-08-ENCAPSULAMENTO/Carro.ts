import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {

    constructor(velocidade: number) {
        super(velocidade)
    }

    acelerar(novaVelocidade: number): string {
        if (novaVelocidade >= 0) {
            this.velocidade = novaVelocidade
            return `A velocidade foi alterada para ${this.velocidade}`
        } else {
            return `A velocidade nao foi alterada por ser invalida. Velocidade atual: ${this.velocidade}`
        }
    }
}