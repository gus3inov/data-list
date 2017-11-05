import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


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
            data  
          })

          console.log(this.state.data)
        })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main data = { this.state.data }/>
      </div>
    );
  }
}

export default App;
