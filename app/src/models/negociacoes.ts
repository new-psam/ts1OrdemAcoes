import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
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
