import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas : [],
      categorias : ["Jogos", "Filmes"]
    }
  }

  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas : novoArrayNotas,
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index,1);
    this.setState({notas : arrayDeNotas});
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
        categorias={this.state.categorias} 
        criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
        <ListaDeCategorias 
        adicionarCategoria={this.adicionarCategoria.bind(this)}
        categorias={this.state.categorias}/>
        <ListaDeNotas 
        notas={this.state.notas}
        apagarNota={this.deletarNota.bind(this)}
        />
        </main>
      </section>
    );
  }
}

export default App;
