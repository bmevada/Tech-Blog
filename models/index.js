const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Username for the posted blog
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Username for the comments
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Multiple comments addded to the blog id
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Blog, Comment };