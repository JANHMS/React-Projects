import React, {Component} from 'react';
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component{
  static defaultProps = {
    numBalls: 6,
    title:'Lotto',
    maxNum:40
  }
  constructor(props){
    super(props);
    this.state = {nums: Array.from({length: this.props.numBalls})};
    this.handleClick=this.handleClick.bind(this);
  }
  generate(){
    //pick a banch of random numbers
    this.setState(curState=> ({
      nums: curState.nums.map(n=> Math.floor(Math.random() * this.props.maxNum ) +1
    )
  }));

  }

  handleClick(){
    this.generate();
  }
  render(){
    return(
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n =>
            <Ball num={n}/>)}
        </div>
        <button onClick={this.handleClick}>Generate Lottery</button>
      </section>
    );
  }
}


export default Lottery;
