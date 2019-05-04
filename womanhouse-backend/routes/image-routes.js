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

// -------~~~~~~~~~~------------   UPDATE IMAGE  -----------~~~~~~~~~~-------------

// PUT /gallery/:id - Update ONE image
router.put("/gallery/:id", (req, res, next) => {
  const { id } = req.params;
  const { image, description } = req.body;
  
  // Image.findByIdAndUpdate(id, req.body)
  Image.findByIdAndUpdate(
    id,
    { $set: { image, description } }
  )
  .then(imageDoc => res.json(imageDoc))
  .catch(err => next(err));
});

// -------~~~~~~~~~~------------   DELETE IMAGE  -----------~~~~~~~~~~-------------

// DELETE /gallery/:id - Delete ONE image
router.delete("/gallery/:id", (req, res, next) => {
  const { id } = req.params;
  Image.findByIdAndRemove(id)
    .then(imageDoc => res.json({message: `You successfully deleted ${imageDoc.image}`}))
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

