import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Makanan from '../../component/Makanan/Makanan'
import MakananController from '../../component/Makanan/MakananControl/MakananControl';
// import { lte } from 'semver';

const HARGA_BAHAN = {
    salad: 1,
    cheese: 2,
    meat:2,
    bacon: 1.5,
};

class RumahMakan extends Component{
    state ={
        bahan:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 4,
    }

    addBahanHandler = (type) =>{
        const counterLama = this.state.bahan[type];
        const updateCounter = counterLama +1;
        const updatedBahan ={
                ...this.state.bahan
        };
        updatedBahan[type]= updateCounter;
        const hargaTambahan = HARGA_BAHAN[type];
        const hargaAsal = this.state.totalPrice;
        const hargaTotal = hargaAsal + hargaTambahan;
        this.setState({totalPrice: hargaTotal, bahan:updatedBahan});  
    }

    removeBahanHandler  =(type)=>{
        const counterLama = this.state.bahan[type];
        if(counterLama <= 0){
            return;
        }
        const updateCounter = counterLama - 1;
        const updatedBahan ={
                ...this.state.bahan
        };
        updatedBahan[type]= updateCounter;
        const hargaKurang = HARGA_BAHAN[type];
        const hargaAsal = this.state.totalPrice;
        const hargaTotal = hargaAsal - hargaKurang;
        this.setState({totalPrice: hargaTotal, bahan:updatedBahan});
    }  

    render(){
        const checkDisable = {
            ...this.state.bahan
        };

        for(let key in checkDisable){
            checkDisable[key] = checkDisable[key] <= 0
        }

        return(
            <Aux>
                <Makanan bahanDibutuhkan = {this.state.bahan}/>
                <MakananController
                bahanDitambahkan ={this.addBahanHandler}
                bahanDikurangkan ={this.removeBahanHandler}
                validasi = {checkDisable} />
            </Aux>
        );
    }
}

export default RumahMakan