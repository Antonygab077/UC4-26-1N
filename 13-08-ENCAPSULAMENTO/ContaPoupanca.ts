import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {

    constructor(saldo: number) {
        super(saldo)
    }

    aplicarJuros(percentual: number): string {
        const juros = this.saldo * (percentual / 100)
        return `
        Porcentagem de juros aplicada: ${percentual}%.
        ${this.atualizarSaldo(juros)}`
    }
}