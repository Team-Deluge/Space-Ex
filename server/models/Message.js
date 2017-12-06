const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');
const Space = require('./Space');

const Message = sequelize.define('space', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  owner_user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: '_id',
    },
  },
  renter_user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: '_id',
    },
  },
  space_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Space,
      key: '_id',
    },
  },
  message: {
    type: Sequelize.TEXT,
  },
});

module.exports = Message;
