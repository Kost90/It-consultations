const {DataTypes} = require('sequelize');
const {sequelize} = require('./conn');

const ContactUsMessages = sequelize.define('contactus', {
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
        type: DataTypes.STRING,
        validate: { isEmail: true },
        unique: true,
        allowNull: false,
      },
    phone: {
        type: DataTypes.NUMBER(255),
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
});


module.exports = ContactUsMessages;