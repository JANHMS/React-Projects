import React,{Component} from 'react';
import Game from './Game';
import Demo from './Demo';
import './App.css';
import Rando from './Rando';
import Button from './Button';
import Brokenclick from './Brokenclick'
import Clicker from './Clicker'
import Die from './Die'
import RollDice from './RollDice'
class App extends Component{
  render(){
    return <div className='App'>
      <RollDice />
      </div>
  }
}

export default App;
