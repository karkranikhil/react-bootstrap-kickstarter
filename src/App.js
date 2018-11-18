import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Demo from './demo';
import Login from './components/Login/login'
import Test from './components/test'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/test' component={Test}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
