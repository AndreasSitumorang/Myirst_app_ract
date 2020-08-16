import React from 'react';
import './Useroutpu.css';

const UserOutput= (property) =>{
    return(
        <div className='Useroutput'>
            <p>Hi now {property.nama} using react</p>
            <p>Terimakasih telah berkunjung</p>
        </div>
    )
};

export default UserOutput;