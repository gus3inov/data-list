import React from 'react';

function Rows ({ id, firstName, lastName, email, phone }){
    return(
        <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    );
}

export default Rows;