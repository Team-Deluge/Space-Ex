import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Signup from './Signup';
import OwnerDash from './OwnerDash';
import RenterDash from './RenterDash';
import Login from './Login';

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/ownerdash" component={OwnerDash} />
    <Route path="/renterdash" component={RenterDash} />
  </Switch>
);

export default App;
