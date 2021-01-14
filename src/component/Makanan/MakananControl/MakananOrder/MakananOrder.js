import React from 'react';
import kelas from './MakananOrder.css'


const makananOrder =(props)=>(
    <div className={kelas.BuildControl}>
        <div className={kelas.Label}>{props.label}</div>
        <button 
            className={kelas.Less} 
            onClick={props.tambah}>Tambah</button>
        <button 
            className={kelas.More} 
            onClick={props.kurang } 
            disabled = {props.validasi}>Kurang</button>
    </div>
);

export default makananOrder;