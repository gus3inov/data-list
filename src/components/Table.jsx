import React, { Component } from 'react';
import Rows from './Rows';

class Table extends Component { 
  constructor(props){
    super(props);

      this.state = {
        sort: false
      }
  }

  handleSort = () => {
    this.setState({
      sort: !this.state.sort
    });
  }

            render(){
              return (
            <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col" style={{ cursor: 'pointer' }} className="thBlack" onClick = { this.handleSort }>
      #  <span className={ this.state.sort ?  `glyphicon glyphicon-hand-up` : `glyphicon glyphicon-hand-down`}></span>
      </th>
      <th scope="col" className="thBlack">First Name</th>
      <th scope="col" className="thBlack">Last Name</th>
      <th scope="col" className="thBlack">email</th>
      <th scope="col" className="thBlack">phone</th>
    </tr>
  </thead>
  <tbody> 
     {
       this.props.data.sort((a, b) => {
  if(this.state.sort){
    if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  }else{
if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  }
  // a должно быть равным b
  return 0;
}).map((value, index) =>{
        return <Rows 
          id        = { value.id } 
          key     =   {index}
          firstName = { value.firstName } 
          lastName  = { value.lastName }
          email     = { value.email }
          phone     = { value.phone }
          adress    = { value.adress }
          description     = { value.description }
         />
       })

      }
       </tbody>
</table>
);
            }
    
}

export default Table;