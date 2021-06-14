import Home from './Component/Home'
import React, { Component }  from 'react';
import Comment from './Component/Comment';
import Team from './Component/Team';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import SearchPhoto from './Component/SearchPhoto';
import SweetShow from './Component/SweetShow';

function App(){
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/SweetShow" component={SweetShow} />
              <Route path="/Comment" component={Comment} />
              <Route path="/SearchPhoto" component={SearchPhoto} />
              <Route path="/Team" component={Team} />
          </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;