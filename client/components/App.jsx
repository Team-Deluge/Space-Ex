const { Route, Switch, Link } = require('react-router-dom');
const React = require('react');
const Signup = require('./Signup');
const OwnerContainer = require('../containers/OwnerContainer');
const RenterContainer = require('../containers/RenterContainer');
const Login = require('./Login');

const App = () => (
  <div>
    <div> CAN YOU SEE ME ? </div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/owner" component={OwnerContainer} />
      <Route path="/renter" component={RenterContainer} />
    </Switch>
  </div>
);

module.exports = App;
