const React = require('react');

class Signup extends React.Component {
  componentDidMount() {
    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName: 'testUser',
        password: 'testPassword',
        email: 'testEmail@gmail.com',
        phone: '555-555-5555',
        user: 'renter',
        rating: 4.4,
      }),
    }).then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>this is a signup pabe</div>
    );
  }
}

module.exports = Signup;
