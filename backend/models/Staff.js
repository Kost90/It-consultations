const { DataTypes } = require("sequelize");
const { sequelize } = require("./conn");

const staff = sequelize.define(
  "staff",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: { isEmail: true },
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profession_role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

// staff.sync();

module.exports = staff;
