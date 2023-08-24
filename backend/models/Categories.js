const { DataTypes } = require("sequelize");
const { sequelize } = require('./conn');

const categories = sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
});

// categories.sync();

module.exports = categories;