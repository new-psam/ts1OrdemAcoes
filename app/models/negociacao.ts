export class Negociacao {
    
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {
      
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}















// export class Negociacao {
//     constructor(_data, quantidade, valor) {
//         this._data = _data;
//         this.quantidade = quantidade;
//         this.valor = valor;
//     }
//     get volume() {
//         return this.quantidade * this.valor;
//     }
//     get data() {
//         const data = new Date(this._data.getTime());
//         return data;
//     }
// }
