import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments'
import Feeling from '../Feeling/Feeling'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import Supported from '../Supported/Supported'
import Thanks from '../Thanks/Thanks'
import Understanding from '../Understanding/Understanding'
function App() {

  return (
    <>
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      <Route exact path="/">
        <Feeling></Feeling>
      </Route>
      <Route exact path="/understanding">
          <Understanding></Understanding>
      </Route>

      </div>
    </Router>
    </>
  );
}

export default App;
