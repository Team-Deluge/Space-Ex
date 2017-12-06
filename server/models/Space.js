const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');

const Space = sequelize.define('space', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
  picture: {
    type: Sequelize.STRING,
  },
  tags: {
    type: Sequelize.ARRAY(sequelize.text),
  },
  owner_user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: '_id',
    },
  },
});

module.exports = Space;
