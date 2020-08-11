import React from 'react';
 // import ReactDOM from "react-dom";
 import Games from './components/Games';
 import "./styles.css";
 import Header from './components/Header';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
  	<Router>
    
     <Header />



    <Route exact path='/' component={Games} />

    </Router>


  );
}

export default App;
