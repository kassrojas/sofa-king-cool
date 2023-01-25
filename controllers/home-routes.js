const router = require('express').Router();
const { Room, Furniture } = require('../models/');

router.get('/', async (req, res) => {
  if (req.session.loggedIn) {
    const roomData = await Room.findAll({
      where: { user_id: req.session.userId },
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
        username: req.session.username,
        rooms
      });

    } catch (err) {
      res.status(500).json(err);
    }
  } else{
  try {
    res.render('homepage');

  } catch (err) {
    res.status(500).json(err);
  }
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

router.get('/post-image/:id', async (req, res) => {
  res.render('post-image', {
    loggedIn: req.session.loggedIn,
    id: req.params.id,
    type: req.session.type
  });
});

module.exports = router;
