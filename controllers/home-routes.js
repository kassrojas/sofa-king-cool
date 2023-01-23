const router = require('express').Router();
const { Room, Furniture } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  const roomData = await Room.findAll({
    include: {
      model: Furniture
    }
  });
  const rooms = roomData.map((room) =>
    room.get({ plain: true })
  );  
  
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      rooms
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/post-furniture/', async (req, res) => {
  res.render('post-furniture', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/post-image', async (req, res) => {
  res.render('post-image', {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;
