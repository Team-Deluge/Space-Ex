
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import Signup from './Signup';
import OwnerContainer from '../containers/OwnerContainer';
import RenterContainer from '../containers/RenterContainer';
import Login from './Login';

const App = () => (
  <div id="app">
    {/* delete this */}
    This is APP!
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/owner" component={OwnerContainer} />
      <Route path="/renter" component={RenterContainer} />
    </Switch>
  </div>
);

module.exports = App;
