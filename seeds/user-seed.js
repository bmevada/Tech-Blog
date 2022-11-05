const { User } =require ('../models');
const userData = [
    {
        username: " ",
        github: " ",
        email: " ",
        password: " "
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers