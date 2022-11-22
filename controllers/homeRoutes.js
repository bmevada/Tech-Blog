const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// FIND ALL blogs and comments and associated user_id
router.get('/', async (req, res) => {
  try {
    console.log(req.session);
    const blogData = await Blog.findAll({
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

    // Serialize data in array

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User login - then redirect to dashboard
router.get('/login', (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// User signup
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blog.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'date_created', 'content', 'user_id'],

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
      res.status(404).json({ message: 'No blog found with this id' });
      return;
    }

    // serialize the data
    const blog = blogData.get({ plain: true });

    // pass data to template
    res.render('single-comment', {
      blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;