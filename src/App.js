import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Person from './Silvany/Andreas'
import Userinput from './Userinput/Userinput';
import Useroutput from './Useroutput/Useroutput';


class App extends Component {
  state = {
    // team :[
    //   {name : 'andreas', age : '21'},
    //   {name : 'hasiholan', age :'22'},
    //   {name : 'yesisca', age : '20'},
    // ]
    name: 'Silvany'
  }

  switchName = (event) =>{
    this.setState({name: event.target.value})
  }

  switchTeam = (namaBaru) => {
    // console.log('it clicked');
    this.setState(
      {
        team :[
          {name : 'Andreas', age : '25'},
          {name : 'Silvany', age :'24'},
          {name : namaBaru, age : '1'},
        ]
      }
    )
  }

  perubahanNama = (pemicu) =>{
    this.setState(
      {
        team :[
          {name : 'Andreas', age : '25'},
          {name : 'Silvany', age :'24'},
          {name : pemicu.target.value, age : '1'},
        ]
      }
    )
  }
  render (){
    // const gaya = {
    //   backgroundColor:'#c4c2c1',
    //   font : 'inherit',
    //   border: '3px solid grey',
    //   padding: '8px',
    //   cursor: 'pointer' 
    // };

    return(
      <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
         <h1>Hi myname is andreas</h1>
         <p>This realy work</p>
         <button 
          className = "Button"
        //  style={gaya} 
          onClick={this.switchTeam.bind(this, 'Hanibal')}> Switch person</button>
         {/* <Person name = {this.state.team[0].name} age = {this.state.team[0].age}>I am the engginer</Person>
         <Person name = {this.state.team[1].name} age = {this.state.team[1].age}/>
         <Person name = {this.state.team[2].name} age = {this.state.team[2].age} 
         click = {this.switchTeam.bind(this, 'Lilya')} berubah = {this.perubahanNama}/> */}
        <br/><br/>
         <Userinput switch={this.switchName} namaSekarang={this.state.name}/>
         <Useroutput nama={this.state.name}/>
         <Useroutput nama={this.state.name}/>
         <Useroutput nama='Andreas'/>
      </div> 
      
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'hi , i\'m using whatsapp'));
    
  }
}

export default App;
