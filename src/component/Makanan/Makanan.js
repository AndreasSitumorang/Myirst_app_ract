import React from 'react';
import kelas from './Makanan.css'
import Bahan from './Bumbu/Bumbu'

const makanan = (props)=>{
    let bahanYangDibutuhkan = Object.keys(props.bahanDibutuhkan).map(igKey=>{
        return [...Array(props.bahanDibutuhkan[igKey])].map((_, i) => {
            return <Bahan key={igKey + i} type={igKey}/>;
        });
    }).reduce((arr, el)=>{
        return arr.concat(el)
    },[]);

    if(bahanYangDibutuhkan.length === 0){
        bahanYangDibutuhkan = <p>Tolong masukan bahan yang anda mau</p>;
    }
    console.log(bahanYangDibutuhkan);
    return(
        <div className={kelas.Makanan}>
            <Bahan type="bread-top"/>      
            {bahanYangDibutuhkan}
            <Bahan type="bread-bottom"/>
        </div>
    );
}

export default makanan;