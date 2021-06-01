const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }
// See model-example file for review

User.init(
    {// TABLE COLUMN DEFINITIONS GO HERE
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
                len: [4]
            }
        }
    },
    { //TABLE CONFIGURATION OPTIONS GO HERE
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;