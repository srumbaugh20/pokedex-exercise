import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pokedex</h2>

          <p className="App-intro">
            Gotta Catch 'em All!
          </p>

          <input type="search" placeholder="Who's that Pokemon?" />
        </div>

        <div className="card">
          Pikachu
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
          />
        </div>
      </div>
    );
  }
}

export default App;
