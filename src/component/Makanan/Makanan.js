import React from 'react';
import kelas from './Makanan.css'
import Bahan from './Bumbu/Bumbu'

const makanan = (props)=>{
    const bahanYangDibutuhkan = Object.keys(props.bahanDibutuhkan).map(igKey=>{
        return [...Array(props.bahanDibutuhkan[igKey])].map((_, i) => {
            return <Bahan key={igKey + i} type={igKey}/>;
        });
    });
    return(
        <div className={kelas.Makanan}>
            <Bahan type="bread-top"/>      
            {bahanYangDibutuhkan}
            <Bahan type="bread-bottom"/>
        </div>
    );
}

export default makanan;