const express = require('express');
const router  = express.Router();
const Image = require('../models/gallery-model');

router.post('/gallery', (req, res, next) => {
  // console.log(' - - -- - - - -',req.body);
  const { image, description } = req.body;

  if(image == '' || description == ''){
    // send error JSON if any of the fields is empty
    res.status(401).json({ message: "All fields need to be filled" })
    return;
  }

  Image.create({ image, description, addedBy:req.user._id })
  .then(imageDoc => res.json(imageDoc))
  .catch(err => next(err));
})

router.get('/gallery', (req, res, next) => {
  Image.find()
  .sort({createdAt: -1})
  .limit(10)
  .then(imagesfromDB => res.json(imagesfromDB))
  .catch(err => next(err));
})

router.post('/gallery/:imageId/update', (req, res, next) => {
console.log(req.body);
  const { image, description, addedBy } = req.body;

  const updatedImage = { // <---------------------------------------
    image,                                                      //  |
    description,
    addedBy,                                                    //  |
    owner: req.user._id	                                        //  |
  }                                                             //  |                                                         //  |
  Image.findByIdAndUpdate(req.params.imageId, req.body) // <---------
  .then( theUpdatedImage => {
    res.json(theUpdatedImage);
  } )
  .catch( err => next(err) )
})

// DELETE A SPECIFIC IMAGE

router.post('/gallery/:id/delete', (req, res, next) => {
  Image.findByIdAndDelete(req.params.id)
  .then(() => {
    res.json('/gallery');
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
