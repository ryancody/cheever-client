import React, { Component } from 'react'
import Input from './components/Input'
import request from 'request-promise'
import Achievement from './components/Achievement'
import bulma from 'bulma'

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      curAppId: 0,
      curAppName:'',
      curCheevs:[]
    }
  }

  handleValue = (val) => {
    console.log(val)
    
    this.setState({curAppId:val})
    this.getCheevs()
  }

  componentDidMount() {
    this.getCheevs()
  }

  async getCheevs () {
    let options = {
      url:'http://localhost:3000/get?appid=' + this.state.curAppId,
      method:'GET'
    }
    
    let data = await request(options)
    try{
      data = JSON.parse(data)
      console.log(data)

      this.setState({
        curAppName:data.name,
        curCheevs:data.achievements
      })
    }catch(e){
      console.log(e.message)
    }

  }

  render() {

    let key = 0
    let cheevs = this.state.curCheevs.map((i) => {
      key++
      return <Achievement key={key} name={i.name} appid={this.state.curAppId} desc={i.desc}/>
    })

    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">
              Cheever
            </h1>
            <p className="subtitle">
              gotta <strong>'cheev</strong> em all!
            </p>
            <Input label={"appid"} submitValue={ this.handleValue }/>
            <h2>{this.state.curAppName}</h2>
            {cheevs}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
