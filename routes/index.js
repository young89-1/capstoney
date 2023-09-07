var express = require('express');
var router = express.Router();
const User = require('../models/User')
const Chirp = require('../models/Chirp')

/* GET users listing. */
router.get('/api/chirp', function(req, res, next) {
});

router.post('/api/chirp', function(req, res, next) {
  const newChirp = new Chirp({
    Content: 'This is the content of the blog post.',
    Author: '64f90d218f4b9c2450bdad69',
  });

  newChirp.save()
    .then((savedChirp) => {
      console.log('Chirp saved successfully:', savedChirp);
    })
    .catch((error) => {
      console.error('Error saving Chirp:', error);
    });
});

router.get('/api/register', function (req, res)  {
});

router.post('/api/register', async (req, res) => {
  const { firstName, lastName, Username, Password, Email } = req.body;
  try {
    const existingUser = await User.findOne({ Username });
    console.log("existingUser", existingUser);
    if (existingUser) {
      return res.status(400).send("Username already taken.");
    }
    const newUser = new User({
      firstName,
      lastName,
      Username,
      Password,
      Email,
      Chirp: [],
      Friends: [],
    });

    await newUser.save();

    res.redirect("/api/login");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("An error occurred while creating the user.");
  }
})

router.get('/api/login', function(req, res, next) {
});

router.post('/api/login', async (req, res) => {
});

router.get('/api/profile', function(req, res, next) {
});

router.post('/api/profile', function(req, res, next) {
});

router.get('/api/friends', function(req, res, next) {
});

router.post('/api/friends', function(req, res, next) {
});

module.exports = router;
