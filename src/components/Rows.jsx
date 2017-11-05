import React, { Component } from 'react';

export default class Rows extends Component{
    constructor(props){
        super(props);

        this.state = {
            isShow: false
    }

    this.handleClickUser = this.handleClickUser.bind(this);
}

    handleClickUser(){
        this.setState({
            isShow: !this.state.isShow
        });
    } 

    render(){
        const { id, key, firstName, lastName, email, phone, adress, description } = this.props;
    
        return (         
              <tr key={key}>
              <th scope="row" className="text-align-center" onClick={this.handleClickUser}>{ id }</th>
              <td className="text-align-center">{ firstName }</td>
              <td className="text-align-center">{ lastName }</td>
              <td className="text-align-center">{ email }</td>
              <td className="text-align-center">{ phone }</td>       
           </tr>
        );
    }   
}