import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount(){
    this.setState({
      data: function(){
        fetch('./users.json')
  .then(function(response) {
    alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
    alert(response.status); // 200

    return response.json();
   })
  .then(function(user) {
    alert(user.id); // iliakan
  })
  .catch( alert );
      }
    });
  }

  con(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="main-table container">
        <Table />
        </div>
      </div>
    );
  }
}

export default App;
