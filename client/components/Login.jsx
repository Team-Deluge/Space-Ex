import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value })
  }


  render() {
    return (
      <div>
        <h4>Login</h4>
        <h4>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
        </h4>
        <h4>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          <br />
          <br />
          <button onClick={()=>console.log(this.state)}>
            Login
          </button>
          Not a user?
          <Link to='/signup'>Signup</Link>
          <br/>
          <Link to='/owner'>OwnerContainer</Link>          <br/>
          <Link to='/renter'>RenterContainer</Link>

        </h4>
      </div>
    )
  }
}

export default Login;
