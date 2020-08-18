import React from 'react';
import gayabaru from './Andreas.css';
import styled from 'styled-components';

// const GayaDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//     width: 450px;
//     }
// `;


const person = (properti) => {
    const gayamu = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className={gayabaru.NewFams} style={gayamu}>
            <p onClick={properti.click}>i am {properti.name} and myvalue is {properti.age}</p>
            <p>{properti.children}</p>
            <input type='text'
                onChange={properti.berubah}
                value={properti.name} />
        </div>
    );
};

export default person;