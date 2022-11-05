const { Blog } =require ('../models');
const blogData = 
[
  {
    title: " ",
    content: " ",
    user_id: " ",
  },

]
 const seedBlogs = () => Blog.bulkCreate(blogData);

 module.exports = seedBlogs