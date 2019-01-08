import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Bills from './components/Bills/bills';
import Add from './components/Add/add';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
          <div className = "App">
          <Navbar />
          <Route exact path = '/' component = { Home } />
          <Route path = '/add' component = { Add } />
          <Route path = '/bills' component = { Bills } />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
