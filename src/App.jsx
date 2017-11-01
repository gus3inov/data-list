import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount(){
        fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
        .then(res =>  res.json())
        .then(data =>{
          this.setState({
            data: data  
          })
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="main-table container">
        <Table data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
