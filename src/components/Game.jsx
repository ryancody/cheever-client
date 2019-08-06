import React, { Component } from 'react'

class Game extends Component {
    constructor(props){
        super(props)

        this.state={
            name:this.props.name
        }
    }

  render() {
    const {name, desc} = this.state;

    return (
        <div className='box'>
            <h4>{name}</h4>
        </div>
    );
  }
}

export default Game;
