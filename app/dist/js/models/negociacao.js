export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dateString, quantidadeString, valorString) {
        const date = parseDate(dateString);
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
function parseDate(value) {
    if (!value)
        throw new Error("O campo data está vazio.");
    const [ano, mes, dia] = value.split('-').map(Number);
    return new Date(ano, mes - 1, dia);
}
