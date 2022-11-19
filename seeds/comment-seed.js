const { Comment } =require ('../models');
const commentData = [
    {
        user_id: 1,
        blog_id: 1,
        comment_text: "Lorem ipsum dolor sit amet."
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments