import React, { Component } from 'react';
import './App.css';


class Buttons extends Component {
  render() {
    return (
      <div >
        <button onClick={()=>this.props.last()}>Last</button>
        <p>Page: {this.props.page}</p>
        <button onClick={()=>this.props.next()}>Next</button>
      </div>
    );
  }
}

export default Buttons;
