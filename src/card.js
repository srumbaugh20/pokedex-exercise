import React, { Component } from 'react';
import './App.css';


class Card extends Component {
  constructor(props){
      super(props);
      this.state = {
                    edit: false,
                    name: props.pokemon.name
                    };
  }

  editName = ()=>{
    this.setState({edit: true})
  }

  saveName = (name)=>{
    this.setState({edit: false}, ()=>{
      fetch(`http://localhost:3004/pokemon/${this.props.pokemon.id}`, {
        method: "PATCH",
        mode: 'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { name: name } )}).then(()=>{
        this.props.refresh();
      })
    })
  }

  changeName = (name)=>{
    this.setState({name: name})
  }

  render() {
    return (
      <div className="App">

        <div >
           <div key={this.props.pokemon.name} className="card">
            {this.state.edit ?<input type='text' value={this.state.name} onChange={(event) => this.changeName(event.target.value)}/> : <p>{this.props.pokemon.name}</p>}
            <img
              key={this.props.pokemon.img}
              src={this.props.pokemon.img}
              alt="Pikachu"
            />
          {this.state.edit ? <button onClick={()=>this.saveName(this.state.name)}>Save</button> : <button onClick={()=>this.editName()}>Edit Name</button>}
        </div>




        </div>
      </div>
    );
  }
}

export default Card;
