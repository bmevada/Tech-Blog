const { User } =require ('../models');
const userData = [
    {
        username: "Bhavika",
        email: "mevada87@gmail.com",
        password: "cookies"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers