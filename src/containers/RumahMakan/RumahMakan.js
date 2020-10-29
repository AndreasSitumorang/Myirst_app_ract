import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Makanan from '../../component/Makanan/Makanan'

class RumahMakan extends Component{
    state ={
        bahan:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
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