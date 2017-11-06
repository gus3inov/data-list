import React from 'react';

export default function Input ({ onChange }){
    return (
        <div className="search-user">   
            <input type="text" placeholder="Enter name..." className="search-user__input" onChange= { onChange }/>
        </div>
    );
}