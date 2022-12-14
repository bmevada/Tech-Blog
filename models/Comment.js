const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize
    }
    // {
    //     id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         primaryKey: true,
    //         autoIncrement: true
    //     },
    //     content: {
    //         type: DataTypes.TEXT,
    //         }
    //     },
    //     user_id: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //             model: 'user',
    //             key: 'id'
    //         }
    //     },
    //     blog_id: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //             model: 'blog',
    //             key: 'id'
    //         }
    //     },
    // },
    // {
    //     sequelize,
    //     freezeTableName: true,
    //     underscored: true,
    //     modelName: 'comment'
    // }
);

module.exports = Comment;