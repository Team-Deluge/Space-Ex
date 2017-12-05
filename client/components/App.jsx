import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Signup from './Signup';
import OwnerContainer from '../containers/OwnerContainer';
import RenterContainer from '../containers/RenterContainer';
import Login from './Login';

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/owner" component={OwnerContainer} />
    <Route path="/renter" component={RenterContainer} />
  </Switch>
);

export default App;
