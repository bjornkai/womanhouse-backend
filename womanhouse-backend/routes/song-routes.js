const express = require('express');
const router  = express.Router();
const Song = require('../models/song-model');

router.post('/songs', (req, res, next) => {
  const { title, author, lyrics } = req.body;
  console.log(req.body);
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

router.post('/songs/:songId/update', (req, res, next) => {
console.log(req.body);
  const { title, author, lyrics } = req.body;

  const updatedSong = { // <---------------------------------------
    title,                                                         //  |
    author,
    lyrics                                                  //  |
    // owner: req.user._id	                                          //  |
  }                                                               //  |                                                         //  |
  Song.findByIdAndUpdate(req.params.songId, req.body) // <----------
  .then( theUpdatedSong => {
    res.json(theUpdatedSong);
  } )
  .catch( err => next(err) )
})

// DELETE A SPECIFIC SONG 

router.post('/songs/:id/delete', (req, res, next) => {
  Song.findByIdAndDelete(req.params.id)
  .then(() => {
    res.json('/songs');
  })
  .catch(err => next(err));
})


function isLoggedIn(req, res, next){
  if(req.user){
    next();
  } else  {
    req.flash('error', 'You need to log in in order to access the page.')
    res.json('/login');
  }
}

module.exports = router;
