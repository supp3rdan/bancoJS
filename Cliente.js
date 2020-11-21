export class Cliente {
    constructor(nome, cpf, senha){
        this._cpf = cpf;
        this._nome = nome;
        this._senha = senha;
    }

    get cpf(){
        return this._cpf;
    }

    get nome(){
        return this.nome;
    }

}