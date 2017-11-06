import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Results from './components/Results';
import Input from './components/Input';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

componentWillMount(){
        fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
        .then(res =>  res.json())
        .then(data =>{
          this.setState({
            data  
          })
        })
  }

handleInput = (e) =>{
     let searchQuery = e.target.value.toLowerCase();
             let displayedContacts = this.state.data.filter(el => {
                 let searchValue = el.firstName.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
             });    

             this.setState({
                data: displayedContacts
             })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-table container">
          <div className="row">
            <div className="col-md-6">
            <Input onChange = {this.handleInput}/>
              <Table data={this.state.data}/>
             </div>
        <div className="col-md-6">
          <Results />
          </div>
           </div>
          </div>
      </div>
    );
  }
}

export default App;
