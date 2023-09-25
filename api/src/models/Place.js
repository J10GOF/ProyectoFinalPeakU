const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // Modelo para Place (Lugar)
    sequelize.define('Place', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // countryId: {
        //     type: DataTypes.UUID,
        //     primaryKey: true,
        //     allowNull: false,
        // },
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
    }, {
        timestamps: false,
    })
};
