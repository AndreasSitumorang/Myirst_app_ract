import React from 'react';
import './Andreas.css';
import Radium from 'radium';

const person = (properti) => {
    const gayamu ={
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="NewFams" style={gayamu}>
            <p onClick={properti.click}>i am {properti.name} and myvalue is {properti.age}</p>
            <p>{properti.children}</p>
            <input type='text'
                onChange={properti.berubah}
                value={properti.name} />
        </div>
    )
};

export default Radium(person);