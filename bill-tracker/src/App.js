import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Bills from './components/Bills/bills';
import Add from './components/Add/add';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <div className = "App">
              <Navbar />
              <Switch>
                <Route exact path = '/' component = { Home } />
                <Route path = '/add' component = { Add } />
                <Route path = '/bills' component = { Bills } />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
