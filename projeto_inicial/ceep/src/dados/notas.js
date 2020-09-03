export default class arrayDeNotas {
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
    }

    apagarNota(index){
        this.notas.splice(index, 1);
    }

    inscrever(func){
        this.inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func()
        });
    }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}