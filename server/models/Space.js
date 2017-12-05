const sequelize = require('./sequelize');
const User = require('./User');

const Space = sequelize.define('space', {
  _id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: sequelize.STRING,
  },
  location: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  rating: {
    type: sequelize.INTEGER,
  },
  picture: {
    type: sequelize.STRING,
  },
  tags: {
    type: sequelize.ARRAY(sequelize.text),
  },
  owner_user_id: {
    type: sequelize.INTEGER,
    references: {
      model: User,
      key: '_id',
    },
  },
});

module.exports = Space;
