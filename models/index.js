const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Username for the blogs posted by the user
// User.hasMany(Blog, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

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


// Comment added to the blog id
// Comment.belongsTo(Blog, {
//     foreignKey: 'blog_id',
//     onDelete: 'CASCADE',
// });

// Username for multiple comments by the user
// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Multiple comments addded to the blog id
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Blog, Comment };