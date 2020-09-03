export default class Categorias {
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this.inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func()
        });
    }

    adicionatCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        console.log(this.categorias)
    }
}