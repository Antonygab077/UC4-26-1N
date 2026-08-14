export class ContaBancaria {
    protected saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    protected atualizarSaldo(valor: number): string {
        if (valor >= 0) {
            console.log(`
            Saldo inicial: ${this.saldo}`)
            this.saldo += valor
            return `Seu saldo atual eh de: ${this.saldo}R$.`
            
        } else {
            return `Voce tentou depositar um valor invalido. Seu saldo se manteve: ${this.saldo}R$.`
        }
    }
}