const { Comment } =require ('../models');
const commentData = [
    {
        user_id: " ",
        blog_id: " ",
        comment_text: " "
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments