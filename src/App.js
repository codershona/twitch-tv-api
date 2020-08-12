import React from 'react';

 import Games from './components/Games';
 import "./styles.css";
 import Header from './components/Header';
 import Stream from './components/Streams';
 import GameStreams from './components/GameStreams';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
  	   <Router>
      <div className="App container-fluid">
        <Header />
        <Route exact path="/" component={Games} />
        <Route exact path="/top-streams" component={Stream} />
         <Route exact path="/game/:id" component={GameStreams} />
        
      </div>
    </Router>


  );
}

export default App;
