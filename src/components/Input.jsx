import React from 'react';

export default function Input ({ onChange }){
    return (
        <div>   
            <input type="text" onChange= { onChange }/>
        </div>
    );
}