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

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao{
        const date = parseDate(dateString);
                
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        
        return new Negociacao(date, quantidade, valor);
    }
}

function parseDate(value: string): Date{
    if (!value) throw new Error("O campo data está vazio.");
    const [ano, mes, dia] = value.split('-').map(Number);
    return new Date(ano, mes - 1, dia);
}














