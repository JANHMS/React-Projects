import React, { Component } from "react";
import { Link } from "react-router-dom";

class FoodSearch extends Component {
    constructor(props){
      super(props);
      this.state={query:''};
      this.handleChange=this.handleChange.bind(this);
      this.handleClick=this.handleClick.bind(this);
    }
    handleChange(evt){
      this.setState({query:evt.target.value});
    }
    handleClick(){
    this.props.history.push(`/food/${this.state.query}`);
    }

    render(){
      return(
        <div>
        <h1>Search for Food</h1>
        <input type='text'
        placeholder='Food'
        vale={this.state.query}
        onChange={this.handleChange}/>
        <Link to={`/food/${this.state.query}`}>Search</Link>
        <button onClick={this.handleClick}>Save New Food</button>
        </div>
    );
  }
}
export default FoodSearch;
