import React,{Component} from 'react';
import kelas from './Bumbu.css'
import Proptipe from 'prop-types'

class Bumbu extends Component{
    render(){
        let bahan = null;

        switch(this.props.type){
            case ('bread-bottom'):
                bahan = <div className={kelas.BreadBottom}></div>;
                break;
            case('bread-top'):
                bahan= (<div className={kelas.BreadTop}>
                    <div className={kelas.Seeds1}></div>
                    <div className={kelas.Seeds2}></div>
                </div>);
                break;
            case('meat'):
                    bahan= <div className={kelas.Meat}></div>;
                    break;
    
            default:
                bahan = null;
        }
        return bahan;
    }
} 

Bumbu.Proptipe ={
    type: Proptipe.string.isRequired
};

export default Bumbu;