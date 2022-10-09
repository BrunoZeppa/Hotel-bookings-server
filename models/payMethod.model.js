const { db, DataTypes } = require("../utils/db.util");

const PayMethod = db.define("payMethod", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    payType: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    cardNumber: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    status: {
        defaultValue: "active",
        allowNull: false,
        type: DataTypes.STRING,
    },
});

module.exports = { PayMethod };
