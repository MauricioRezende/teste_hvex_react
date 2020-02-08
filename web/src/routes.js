import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Activity from './pages/Activity'
import Favorite from './pages/Favorites'

export default function Routes() {
  // const types = ['Education','Recreational','Social','Diy','Charity','Cooking','Relaxation','Music','Busywork']
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        {/* <Route path="/activity" component={Activity} />
        {types.map(type => (
          <Route path="/activity" render={(props) =>  <Activity {...props} type={type} />} key={type} />
        ))} */}
        {/* <Route path="/activity" render={(props) =>  <Activity {...props} type="Education" />} /> */}
        <Route path="/activity" component={Activity} />
        <Route path="/favorites" component={Favorite} />
      </Switch>
    </BrowserRouter>
  );
}
