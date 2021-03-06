/*jshint esversion:6 */
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const user = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
      type: Sequelize.STRING,
      allowNull:false
  },
  password: {
      type: Sequelize.STRING,
      allowNull:false
  },
});

module.exports = user;
