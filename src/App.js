import React, { Component } from 'react'
import Input from './components/Input'
import request from 'request-promise'
import Game from './components/Game'
require('../node_modules/bulma/css/bulma.min.css')

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      curGames: [],
      curAppName: '',
      searchTimer: 0,
      searchBarLoading: false
    }
  }

  handleValue = (val) => {
    console.log(val)
    
    this.setState({curGames: [], curAppName:val}, () => this.getGames())
  }

  handleChange = (val) => {

    clearTimeout(this.state.searchTimer)

    this.setState({
      searchTimer: setTimeout( () => this.handleValue(val), 300 ),
      searchBarLoading:true
    })
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
        curGames:data,
        searchBarLoading:false
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
            <Input label={"Search titles..."} 
                    submitValue={ this.handleChange } 
                    isLoading={this.state.searchBarLoading}
                    isActive={ (this.state.curGames) ? true : false }
                    />
            <div className="title is-size-2">{this.state.curAppName}</div>
            {games}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
