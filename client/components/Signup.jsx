import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      phone: '',
      userType: 'Owner'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name, event) {
    this.setState({ [name]: event.target.value })
  }


  render() {
    return (
      <div>
        <h3>Signup</h3>

        <h4>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange.bind(this, 'username')}
          />
        </h4>

        <h4>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
          />
        </h4>

        <h4>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')}
          />
        </h4>

        <h4>
          Phone:
          <input
            type="text"
            value={this.state.phone}
            onChange={this.handleChange.bind(this, 'phone')}
          />
        </h4>

        <h4>
          User Type:
          <select value={this.state.userType} onChange={this.handleChange.bind(this, 'userType')}>
            <option value="Owner">Owner</option>
            <option value="Renter">Renter</option>
          </select>
        </h4>

        <h4>

          <br />
          <button onClick={()=>console.log(this.state)}>
            Signup
          </button>
          Already a user?
          <Link to='/login'>Login</Link>
        </h4>
      </div>
    )
  }
}

export default Signup;
