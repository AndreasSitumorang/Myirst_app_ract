import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Person from './Silvany/Andreas'
import person from './Silvany/Andreas';
import styled from 'styled-components';

// import Userinput from './Userinput/Userinput';
// import Useroutput from './Useroutput/Useroutput';

const Gayatombol = styled.button`
  background-color: ${props => props.alternatif ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alternatif ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;


class App extends Component {
  state = {
    team: [
      { id: 'rpg', name: 'andreas', age: '21' },
      { id: 'fps', name: 'hasiholan', age: '22' },
      { id: 'mma', name: 'yesisca', age: '20' },
    ],
    showNama: false,
  }

  switchTeam = (namaBaru) => {
    // console.log('it clicked');
    this.setState(
      {
        team: [
          { name: 'Andreas', age: '25' },
          { name: 'Silvany', age: '24' },
          { name: namaBaru, age: '1' },
        ]
      }
    )
  }

  penghusan = (indexperorang) => {
    const keluarga = this.state.team;
    keluarga.splice(indexperorang, 1);
    this.setState({ team: keluarga });
  }

  scrollName = () => {
    const apakah = this.state.showNama;
    this.setState({ showNama: !apakah });
  }

  perubahanNama = (pemicu, id) => {
    const indeksSeseorang = this.state.team.findIndex(p => {
      return p.id === id;
    });

    const seseorang = {
      ...this.state.team[indeksSeseorang]
    };
    // const seseorang = Object.assign({}, this.state.team[indeksSeseorang]);

    seseorang.name = pemicu.target.value;

    const orang = [...this.state.team];
    orang[indeksSeseorang] = seseorang;
    this.setState(
      {
        team: orang
      }
    );
  }
  render() {
    const gaya = {
      backgroundColor: 'lightgray',
      color: 'black',
      border: '3px solid grey',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'grey',
        color: 'black'
      }
    };

    let namakita = null;
    if (this.state.showNama) {
      namakita =
        (
          <div>
            {this.state.team.map((kelompok, index) => {
              return <Person
                click={() => this.penghusan(index)}
                name={kelompok.name}
                age={kelompok.age}
                key={kelompok.id}
                berubah={(pemicu) => this.perubahanNama(pemicu, kelompok.id)} />
            })}
          </div>
        );
      // gaya.backgroundColor = 'Red';
    }

    // let kelasss = ['red' ,'bold'].join(' ');
    const kelasss = [];
    if (this.state.team.length <= 2) {
      kelasss.push('red');
    }

    if (this.state.team.length <= 1) {
      kelasss.push('bold');
    }
    return (

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
        <p className={kelasss.join(' ')}>This realy work</p>
        {/* <button
          className="Button"
          style={gaya} */}
        <Gayatombol alternatif={this.state.showNama} onClick={this.scrollName}> Switch person
         </Gayatombol>

        {namakita}
      </div>

    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'hi , i\'m using whatsapp'));

  }
}

export default App;
