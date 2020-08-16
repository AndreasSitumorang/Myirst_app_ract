import React from 'react';

const Userinput= (property) =>{
    const gaya ={
        border: '4px solid red'
    };

    return <input 
    type="text" 
    style={gaya}
    onChange={property.switch}
    value={property.namaSekarang}
    />;
};

export default Userinput;