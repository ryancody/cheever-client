import React, { Component } from 'react'
import './style/App.css'
import GetPic from './components/GetPic'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetPic />
      </div>
    );
  }
}

export default App;
