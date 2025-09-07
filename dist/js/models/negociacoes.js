export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
// import { Negociacao } from './negociacao.js';
// export class Negociacoes {
//     private negociacoes: Negociacao[] = [];
//     adiciona(negociacao: Negociacao) {
//         this.negociacoes.push(negociacao);
//     }
//     lista(): readonly Negociacao[] {
//         return this.negociacoes;
//     }
// }
