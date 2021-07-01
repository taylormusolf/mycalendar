import React from "react";
import ReactDOM from "react-dom";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Splash from './splash'

const App = () => (
  <div className='big-div'>
      <div className= 'main-content'>
        <Switch>
          <Route path="/" component={Splash} />
        </Switch>
      </div>
  </div>
);

export default App;