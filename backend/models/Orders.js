const { DataTypes } = require("sequelize");
const { sequelize } = require('./conn');

const orders = sequelize.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titel_of_service: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false //MAG: if default below is set to allowNull: false, you don't need to specify it here
    },
});

// orders.sync(); //MAG: put any syncing methods inside of a separate syncing functions file which you might want to run (when you start this server, you don't necessarily want it to sync.) You only want it to sync when you call the sync method specifically

//orders.sync({force: true})

//MAG: also, it's standard to use capitalize and singuarlize the names of models (Order and User vs orders and users);

module.exports = orders;