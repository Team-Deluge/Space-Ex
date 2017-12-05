const sequelize = require('./sequelize');
const User = require('./User');
const Space = require('./Space');

const Event = sequelize.define('space', {
  _id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: sequelize.STRING,
  },
  owner_user_id: {
    type: sequelize.INTEGER,
    references: {
      model: User,
      key: '_id',
    },
  },
  renter_user_id: {
    type: sequelize.INTEGER,
    references: {
      model: User,
      key: '_id',
    },
  },
  space_id: {
    type: sequelize.INTEGER,
    references: {
      model: Space,
      key: '_id',
    },
  },
  start: {
    type: sequelize.DATE,
  },
  end: {
    type: sequelize.DATE,
  },
  confirmed: {
    type: sequelize.BOOLEAN,
  },
});

module.exports = Event;
