import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import Categorias from './dados/categorias';
import arrayDeNotas from './dados/notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new arrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionatCategoria}
            categorias={this.categorias.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;