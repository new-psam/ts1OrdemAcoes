export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
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
