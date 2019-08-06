import React, { Component } from 'react'
import Input from './components/Input'
import request from 'request-promise'
import Game from './components/Game'
import bulma from 'bulma'

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      curGames: [],
      curAppName: ''
    }
  }

  handleValue = (val) => {
    console.log(val)
    
    this.setState({curGames: [], curAppName:val}, () => this.getGames())
  }

  async getGames () {
    let options = {
      url:'http://localhost:5000/getAll?id=' + this.state.curAppName,
      method:'GET'
    }
    
    let data = await request(options)
    try{
      data = JSON.parse(data)
      console.log(data)

      this.setState({
        curGames:data
      })
    }catch(e){
      console.log(e.message)
    }

  }

  render() {

    let key = 0
    let games = this.state.curGames.map((i) => {
      key++
      return <Game key={key} name={i.name} />
    })

    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="title is-size-1">
              Cheever
            </div>
            <p className="subtitle">
              gotta <strong>'cheev</strong> em all!
            </p>
            <Input label={"appid"} submitValue={ this.handleValue }/>
            <div className="title is-size-2">{this.state.curAppName}</div>
            {games}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
