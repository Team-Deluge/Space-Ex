const sequelize = require('./sequelize');

const User = sequelize.define('user', {
  userName: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: sequelize.STRING,
    
  },
});
