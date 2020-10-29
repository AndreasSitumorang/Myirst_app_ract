import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Makanan from '../../component/Makanan/Makanan'

class RumahMakan extends Component{
    state ={
        bahan:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        }
    }

    render(){
        return(
            <Aux>
                <Makanan bahanDibutuhkan = {this.state.bahan}/>
                <div>Ramen asdasdadada</div>
            </Aux>
        );
    }
}

export default RumahMakan