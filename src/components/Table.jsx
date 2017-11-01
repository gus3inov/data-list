import React from 'react';
import Rows from './Rows';


function Table () {  
            return (
            <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
   <Rows />
  </tbody>
</table>
);
    
}

export default Table;