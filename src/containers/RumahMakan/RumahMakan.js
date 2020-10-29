import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Makanan from '../../component/Makanan/Makanan'

class RumahMakan extends Component{
    render(){
        return(
            <Aux>
                <Makanan/>
                <div>Ramen asdasdadada</div>
            </Aux>
        );
    }
}

export default RumahMakan