const { Comment } =require ('../models');
const commentData = [
    {
        user_id: 1,
        blog_id: 1,
        comment_text: "Lorem ipsum dolor sit amet."
    },

    {
        user_id: 2,
        blog_id: 5,
        comment_text: "Lorem ipsum dolor sit amet."
    },

    {
        user_id: 3,
        blog_id: 4,
        comment_text: "Lorem ipsum dolor sit amet."
    },

    {
        user_id: 4,
        blog_id: 3,
        comment_text: "Lorem ipsum dolor sit amet."
    },

    {
        user_id: 5,
        blog_id: 2,
        comment_text: "Lorem ipsum dolor sit amet."
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments