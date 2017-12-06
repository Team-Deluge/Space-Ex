
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  // reducers go here (signup post request)
  signup: dispatch.signup
});

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      phone: '',
      userType: 'Owner',
    };
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  signup() {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: this.state.username,
        password: this.state.password,
        email: this.state.email,
        phone: this.state.phone,
        user: this.state.userType,
      }),
    };

    fetch('http://localhost:3000/signup', config)
      .then((response) => {
        response.json()
          .then(data => console.log(data));
      }).catch(err => console.log(err));
  }


  render() {
    return (
      <div id="sign-up">
        <h3>Signup</h3>
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
        </h4>
        <h4>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.handleChange('email', e)}
          />
        </h4>
        <h4>
          Phone:
          <input
            type="text"
            value={this.state.phone}
            onChange={e => this.handleChange('phone', e)}
          />
        </h4>
        <h4>
          User Type:
          <select value={this.state.userType} onChange={e => this.handleChange('userType', e)}>
            <option value="Owner">Owner</option>
            <option value="Renter">Renter</option>
          </select>
        </h4>
        <h4>
          <br />

          {/* post request (reducers) to signup goes in this button */}
          <button onClick={() => this.props.signup()}>
            Signup
          </button>
          Already a user?
          <Link to='/login'>Login</Link>
        </h4>
      </div>
    )
  }
}

export default connect(mapDispatchToProps)(Signup);
