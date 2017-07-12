import React, { Component } from 'react';
import Card from './card.js';
import Buttons from './buttons.js';
import './App.css';


function getUrl(page, search) {
  console.log(search);
  if(search){
  return `http://localhost:3004/pokemon?q=${search}`;
  }else{
    return `http://localhost:3004/pokemon?_page=${page}&_limit=10`;
  }

  }

class App extends Component {
  constructor(){
      super();
      this.state = { pokemon:[],
                     page: 1,
                     search: ''
                    };
    }

  componentDidMount(){
      this.fetchPokemon();
    }

  fetchPokemon = ()=>{
    fetch(getUrl(this.state.page, this.state.search)).then((response)=>{
      if(response.ok){
        response.json().then(data =>{
          this.setState({
            pokemon: data,
          })
        })
      }
    })
  }

  inceasePage = ()=>{
      if(this.state.page !== 16){
        this.setState({ page: this.state.page + 1 }, () => {
          this.fetchPokemon()
        })
      }
    }

  decreasePage = () => {
        if(this.state.page !== 1){
          this.setState({ page: this.state.page - 1 }, () =>{
            this.fetchPokemon()
          })
        }
      }

  searchPokemon = (pokemon)=>{
    this.setState({search: pokemon}, () =>{
      this.fetchPokemon()
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pokedex</h2>

          <p className="App-intro">
            Gotta Catch em All!
          </p>

          <input type="search" placeholder="Who's that Pokemon?" onChange={(event) => this.searchPokemon( event.target.value )} />

        </div>
        <div className="cardBox">

        {this.state.pokemon.map((pokemon)=>{
        return <Card pokemon={pokemon} refresh={this.fetchPokemon}/>
        })}


        </div>
        <Buttons page={this.state.page} next={this.inceasePage} last={this.decreasePage}/>
      </div>
    );
  }
}

export default App;
