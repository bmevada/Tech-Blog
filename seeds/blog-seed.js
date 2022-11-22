const { Blog } =require ('../models/Index');
const blogData = 
[
  {
    title: "Lorem Ipsum - Version 1",
    content: "Lorem ipsum dolor sit amet. Est magni obcaecati qui galisum ratione id labore debitis. Vel fugiat vitae qui quia iure ex consequatur vero aut inventore harum aut maxime mollitia non sapiente consequatur sit modi excepturi.",
    user_id: 1,
  },

  {
    title: "Lorem Ipsum - Version 2",
    content: "Lorem ipsum dolor sit amet. Est magni obcaecati qui galisum ratione id labore debitis. Vel fugiat vitae qui quia iure ex consequatur vero aut inventore harum aut maxime mollitia non sapiente consequatur sit modi excepturi.",
    user_id: 5,
  },

  {
    title: "Lorem Ipsum - Version 3",
    content: "Lorem ipsum dolor sit amet. Est magni obcaecati qui galisum ratione id labore debitis. Vel fugiat vitae qui quia iure ex consequatur vero aut inventore harum aut maxime mollitia non sapiente consequatur sit modi excepturi.",
    user_id: 4,
  },

  {
    title: "Lorem Ipsum - Version 4",
    content: "Lorem ipsum dolor sit amet. Est magni obcaecati qui galisum ratione id labore debitis. Vel fugiat vitae qui quia iure ex consequatur vero aut inventore harum aut maxime mollitia non sapiente consequatur sit modi excepturi.",
    user_id: 3,
  },

  {
    title: "Lorem Ipsum - Version 5",
    content: "Lorem ipsum dolor sit amet. Est magni obcaecati qui galisum ratione id labore debitis. Vel fugiat vitae qui quia iure ex consequatur vero aut inventore harum aut maxime mollitia non sapiente consequatur sit modi excepturi.",
    user_id: 2,
  },


]
 const seedBlogs = () => Blog.bulkCreate(blogData);

 module.exports = seedBlogs