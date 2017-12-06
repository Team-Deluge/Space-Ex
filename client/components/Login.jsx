import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions';
import loginUser from '../actions/auth';

const mapDispatchToProps = dispatch => ({
  loginUser(userInfo) {
    console.log(userInfo);
    dispatch(loginUser(userInfo));
  },
});

const mapStateToProps = () => ({});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <div id="login">
        <h4>Login</h4>
        <h4>
          Username:

          <input
            type="text"
            value={this.state.username}
            onChange={e => this.handleChange('username', e)}
          />
        </h4>
        <h4>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={e => this.handleChange('password', e)}
          />
          <br />
          <br />

          {/* login post request reducer to database goes here */}
          <button onClick={()=>console.log(this.state)}>

            Login
          </button>
          Not a user?
          <Link to='/signup'>Signup</Link>

          {/* FIX: temp links to Owner and Renter Container */}
          <br/>
          <br/>
          <Link to='/owner'>OwnerContainer</Link>
          <br/>
          <Link to='/renter'>RenterContainer</Link>

        </h4>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

