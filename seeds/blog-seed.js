const { Blog } =require ('../models');
const blogData = 
[
  {
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet. Est magni obcaecati qui galisum ratione id labore debitis. Vel fugiat vitae qui quia iure ex consequatur vero aut inventore harum aut maxime mollitia non sapiente consequatur sit modi excepturi.",
    user_id: 1,
  },

]
 const seedBlogs = () => Blog.bulkCreate(blogData);

 module.exports = seedBlogs