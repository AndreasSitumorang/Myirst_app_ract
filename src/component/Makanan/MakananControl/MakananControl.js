import React from 'react';
import kelas from './MakananControl.css';
import MakananOrder from './MakananOrder/MakananOrder';


const controls =[   
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
];

const makananController = (props)=>(
    <div className={kelas.Buildtools}>
        {controls.map(ctrl => (
            <MakananOrder 
                key={ctrl.label} 
                label={ctrl.label}
                tambah={() =>props.bahanDitambahkan(ctrl.type)}
                kurang={() =>props.bahanDikurangkan(ctrl.type)} 
                validasi ={props.validasi[ctrl.type]}/>
        ))}
    </div>
);

export default makananController;