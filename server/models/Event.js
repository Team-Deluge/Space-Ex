const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');
const Space = require('./Space');

const Event = sequelize.define('event', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
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
  start: {
    type: Sequelize.DATE,
  },
  end: {
    type: Sequelize.DATE,
  },
  confirmed: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Event;
