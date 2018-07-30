import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Ajouter from './pages/Ajouter';
import Modifier from './pages/Modifier';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div class="container">
          <div class="row">
           <div class="col-sm">
          <Link to='/'>Home</Link>
          </div>
          <div class="col-sm">
          <Link to='/Ajouter'>Ajouter</Link>
          </div>
          <div class="col-sm">
          <Link to='/Modifier'>Modifier</Link>
          </div>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/Ajouter" component={Ajouter}/>
          <Route path="/Modifier" component={Modifier}/>

      </div>
</Router>
    );
  }
}

export default App;
