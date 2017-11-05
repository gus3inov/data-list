import React, { Component } from 'react';
import Table from './Table';
import Results from './Results';
import Input from './Input';


export default class Main extends Component {
  constructor(props){
    super(props);

     this.state = {
        newData: this.props.data
    }

    console.log(this.props.data)
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
     let searchQuery = e.target.value.toLowerCase();
             let displayedContacts = this.state.newData.filter(el => {
                 let searchValue = el.firstName.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
             });    

             this.setState({
                newData: displayedContacts
             })
  }

  render() {
    return (
        <div className="main-table container">
          <div className="row">
            <div className="col-md-6">
            <Input onChange = {this.handleInput}/>
              <Table data={this.state.newData}/>
             </div>
        <div className="col-md-6">
          <Results />
          </div>
           </div>
          </div>
    );
  }
}