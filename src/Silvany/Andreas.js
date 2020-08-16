import React from 'react';
import './Andreas.css';

const person = (properti) =>{
    return (
        <div className = "NewFams">
            <p onClick={properti.click}>i am {properti.name} and myvalue is {properti.age}</p>
            <p>{properti.children}</p>
            <input type='text' 
            onChange={properti.berubah}
            value={properti.name}/>
        </div>
    )
};

export default person;