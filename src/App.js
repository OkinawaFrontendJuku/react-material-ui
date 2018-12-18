import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Price from './components/pages/Price';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/price" component={Price} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
