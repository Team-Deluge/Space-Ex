
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  // reducers go here (signup post request)
});

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
      <div id="signUp">
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

export default connect(mapDispatchToProps)(Signup);
