import React,{Component} from 'react';
import Game from './Game';
import Demo from './Demo'
import './App.css';

class App extends Component{
  render(){
    return <div className='App'>
      <Game color='purple'/>
      <Demo animal='Cat' food='Pineapple'/>
      </div>
  }
}

export default App;
