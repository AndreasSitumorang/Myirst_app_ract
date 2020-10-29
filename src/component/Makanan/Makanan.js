import React from 'react';
import kelas from './Makanan.css'
import Bahan from './Bumbu/Bumbu'

const makanan = (props)=>{
    return(
        <div className={kelas.Makanan}>
            <Bahan type="bread-top"/>      
            <Bahan type="meat"/>
            <Bahan type="bread-bottom"/>
        </div>
    );
}

export default makanan;