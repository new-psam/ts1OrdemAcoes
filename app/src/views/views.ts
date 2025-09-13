

export abstract class View<T> {
    protected element : HTMLElement;
    //private escapar: boolean = false;

    constructor(seletor: string) {
        const element = document.querySelector(seletor);
        if (element){
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM.\nVerifique!`);
        }
      
    }

    protected abstract template(mode: T): string;
    
    
    public update(model: T): void {
        let template = this. template(model);
        this.element.innerHTML = template;
    }
}

// @logarTempoDeExecucao(true)
//     @inspect