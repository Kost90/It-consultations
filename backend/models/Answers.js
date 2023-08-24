const { DataTypes } = require("sequelize");
const { sequelize } = require('./conn');

const answers = sequelize.define("answers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titel: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    from: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    to: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
});


module.exports = answers;