// ====================================================
// IF YOU ARE LOOKING FOR THE 'fake' ROUTING EXAMPLE...
// I MOVED THE CODE INTO FakeRouting.js
// ====================================================
import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

const Hater = () => <h1>I hate Dogs</h1>;

class App extends Component {
  render() {
    return (
      <div className='App'>
      <nav className='App-nav'>
      <a herf='/'>About</a>
      <a herf='/dog'>Dog</a>
      <a herf='/contact'>contact</a>
      <a herf='/dog/hater'>Hater</a>
      </nav>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/dog' component={Dog}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/dog/hater' component={Hater}/>
        </Switch>


      </div>
    );
  }
}

export default App;
