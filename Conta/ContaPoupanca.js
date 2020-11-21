import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, agencia, cliente){
        super(saldoInicial, cliente, agencia);
    }
    sacar(valor){
        const taxa = 1.02;
        return this_sacar(valor, taxa);
    }

}