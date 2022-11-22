const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, Comment, User} = require('../models/Index');
const withAuth = require('../utils/auth');

// GET ALL blogs and ALL comments
router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [User]
            // where: {
            //     // use the ID from the session
            //     user_id: req.session.user,
            // },
            // attributes: ['id', 'title', 'content', 'date_created'],
            // include: [
                // {
                //     model: Comment,
                //     attributes: [
                //         'id',
                //         'comment_text',
                //         'blog_id',
                //         'user_id',
                //         'date_created'
                //     ],
                //     include: {
                //         model: User,
                //         attributes: ['username']
                //     }
                // },
            //     {
            //         model: User,
            //         attributes: ['username']
            //     },
            // ],
        });

        // Serialize data in array
        const blogs = blogData.map(blog => blog.get({ plain: true }));
        console.log (blogs)
        // Pass serialized data
        res.render('dashboard', {
            blogs,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a blog and edit
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'title', 'date_created', 'content'],
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id',
                        'comment_text',
                        'blog_id',
                        'user_id',
                        'date_created',
                    ],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        if (!blogData) {
            res.status(404).json({ message: 'No Blog found with this id' });
            return;
        }
        // serialize
        const blog = blogData.get({ plain: true });
        res.render('edit-blog', {
            blog,
            loggedIn: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET Create blog
router.get('/create/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                // Read user id from session
                user_id: req.session.user_id,
            },
            // attributes: ['id', 'title', 'date_created', 'content'],
            include: [
                {
                    model: Comment,
                    attributes: [
                        // 'id',
                        // 'comment_text',
                        // 'blog_id',
                        // 'user_id',
                        // 'date_created',
                    ],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const blogs = blogData.map(blog => blog.get({ plain: true }));
        res.render('add-new-blog', {
            blogs,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;