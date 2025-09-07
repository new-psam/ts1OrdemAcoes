import { Negociacao } from "../models/negociacao.js";

// function parseDate(value: string): Date {
//     const [ano, mes, dia] = value.split('-').map(Number);
//     return new Date(ano, mes - 1, dia);
// }

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data') //as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') //as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') //as HTMLInputElement;
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g; // expressão regular
        const date = new Date(this.inputData.value.replace(exp, ','));

        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData,focus();
    }
}











// import { Negociacao } from '../models/negociacao.js';
// import { Negociacoes } from '../models/negociacoes.js';

// export class NegociacaoController {
//     private inputData: HTMLInputElement;
//     private inputQuantidade: HTMLInputElement;
//     private inputValor: HTMLInputElement;
//     private negociacoes = new Negociacoes();

//     constructor() {
//         this.inputData = document.querySelector('#data');
//         this.inputQuantidade = document.querySelector('#quantidade');
//         this.inputValor = document.querySelector('#valor');
//     }

//     adiciona(): void {
//         const negociacao = this.criaNegociacao();
//         negociacao.data.setDate(12);
//         this.negociacoes.adiciona(negociacao);
//         console.log(this.negociacoes.lista());
//         this.limparFormulario();
//     }

//     criaNegociacao(): Negociacao {
//         const exp = /-/g;
//         const date = new Date(this.inputData.value.replace(exp, ','));
//         const quantidade = parseInt(this.inputQuantidade.value);
//         const valor = parseFloat(this.inputValor.value);
//         return new Negociacao(date, quantidade, valor);
//     }

//     limparFormulario(): void {
//         this.inputData.value = '';
//         this.inputQuantidade.value = '';
//         this.inputValor.value = '';
//         this.inputData.focus();
//     }
// }
