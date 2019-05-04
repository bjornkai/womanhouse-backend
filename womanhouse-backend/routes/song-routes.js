const express = require('express');
const router  = express.Router();
const Song = require('../models/song-model');

router.post('/songs', (req, res, next) => {
  const { title, author, lyrics } = req.body;
  // console.log(req.body);
  if(title == '' || author == '' || lyrics ==''){
    // send error JSON if any of the fields is empty
    res.status(401).json({ message: "All fields need to be filled" })
    return;
  }

  Song.create({ title, author, lyrics })
  .then(songDoc => res.json(songDoc))
  .catch(err => next(err));
})

router.get('/songs', (req, res, next) => {
  Song.find()
  .sort({createdAt: -1})
  .limit(10)
  .then(songsfromDB => res.json(songsfromDB))
  .catch(err => next(err));
})

// -------~~~~~~~~~~------------   UPDATE AND DELETE SONG  -----------~~~~~~~~~~-------------

// PUT /songs/:id - Update ONE song
router.put("/songs/:id", (req, res, next) => {
  const { id } = req.params;
  const { title, author, lyrics } = req.body;
  
  // Song.findByIdAndUpdate(id, req.body)
  Song.findByIdAndUpdate(
    id,
    { $set: { title, author, lyrics } }
  )
  .then(songDoc => res.json(songDoc))
  .catch(err => next(err));
});


// DELETE /songs/:id - Delete ONE song
router.delete("/songs/:id", (req, res, next) => {
  const { id } = req.params;
  Song.findByIdAndRemove(id)
    .then(songDoc => res.json({message: `You successfully deleted ${songDoc.title}`}))
    .catch(err => next(err));
});

function isLoggedIn(req, res, next){
  if(req.user){
    next();
  } else  {
    req.flash('error', 'You need to log in in order to access the page.')
    res.json('/login');
  }
}

module.exports = router;

