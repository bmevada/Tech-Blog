// Seed all users, blogs and comments
const seedBlogs = require('./blog-seed');
const seedComments = require('./comment-seed');
const seedUsers = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Sychronize Database');

  await seedUsers();
  console.log('User Seeded');

  await seedBlogs();
  console.log('Blog Seeded');

  await seedComments();
  console.log('Comments Seeded');

  process.exit(0);
};

seedAll();