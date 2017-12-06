const User = require('../models/User');

// this function connects to the signup page. It returns an array containing two indices:
// the user and a boolean, which will be true if the user was created and false if the user
// already exists.

// const createUser = (req, res) => {
//   User.findOrCreate({
//     where: {
//       userName: 'test1',
//     },
//     defaults: {
//       userName: 'test1',
//       password: 'pass1',
//       email: 'test1',
//       phone: 'test1',
//       user: 'test1',
//       rating: 3.2,
//     },
//   }).then((data) => {
//     res.json(data);
//   });
// };

const createUser = (req, res) => {
  User.findOrCreate({
    where: {
      userName: req.body.userName,
    },
    defaults: {
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      user: req.body.user,
      rating: req.body.rating,
    },
  }).then((data) => {
    res.json(data);
  });
};

// need to add bcrypt to this later
const findUser = (req, res) => {
  User.findOne({
    where: {
      userName: req.body.userName,
      password: req.body.password,
    },
  }).then((data) => {
    res.json(data);
  });
};

module.exports = { createUser, findUser };

