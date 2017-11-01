import React from 'react';
// import Rows from './Rows';

function Table ({ data }) {  
            return (
            <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col" className="thBlack">#</th>
      <th scope="col" className="thBlack">First Name</th>
      <th scope="col" className="thBlack">Last Name</th>
      <th scope="col" className="thBlack">email</th>
      <th scope="col" className="thBlack">phone</th>
    </tr>
  </thead>
  <tbody>
     {
         data
         .map( (val, index) => {
        return <tr key={index}>
      <th scope="row" className="text-align-center">{val.id}</th>
      <td className="text-align-center">{val.firstName}</td>
      <td className="text-align-center">{val.lastName}</td>
      <td className="text-align-center">{val.email}</td>
      <td className="text-align-center">{val.phone}</td>
    </tr>
     })
     }
  </tbody>
</table>
);
    
}

export default Table;