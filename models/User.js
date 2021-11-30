const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4] // at least 4 characters long
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS
        // pass in imported sequelize connection
        sequelize,
        // do not automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // do not pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camelCasing
        underscored: true,
        // make it so our model name stays lowercase in the db
        modelName: 'user'
    }
);

module.exports = User;