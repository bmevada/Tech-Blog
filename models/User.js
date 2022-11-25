const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//Create a user model - username and password
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// define table columns and configuration
User.init(
    {
        id: {
            // Define ID Column
            // Sequelize DataTypes and state the type of data
            // Instruct that this is the primary key
            // Turn on auto increment
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // Define a user column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Password must be at least 5 charcters long
                len: [5]
            },
        },

    },
    {
        // Set up beforeCreate hook functionality
        hooks: {
            async beforeCreate (newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
           // Set up beforeUpdate hook functionality 
            async beforeUpdate (updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        
        // Pass in the imported sequelize connection in the database
        sequelize,
        freezeTableName: true,
        // Use underscore insttead of camel casing
        underscored: true,
        // Ensure the model remains in lower case
        modelName: 'User',
    }
);

module.exports = User;