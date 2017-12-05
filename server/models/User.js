const sequelize = require('./sequelize');

const User = sequelize.define('user', {
  _id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: sequelize.STRING,
  },
  user: {
    type: sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: sequelize.INTEGER,
  },
});

module.exports = User;
