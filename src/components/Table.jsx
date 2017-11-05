import React from 'react';
import Rows from './Rows';

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
       data.map((value, index) =>{
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
       }).sort(function (a, b) {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  // a должно быть равным b
  return 0;
})

      }
       </tbody>
</table>
);
    
}

export default Table;