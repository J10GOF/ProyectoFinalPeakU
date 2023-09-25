const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // Modelo para Place (Lugar)
    sequelize.define('Place', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        countryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        distance: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        comments: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.TEXT,
        },
    });

    // Modelo para Country (País)
    sequelize.define('Country', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
