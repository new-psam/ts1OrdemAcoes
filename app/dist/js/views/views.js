export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM.\nVerifique!`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
