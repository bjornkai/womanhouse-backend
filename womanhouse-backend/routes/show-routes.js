const express = require('express');
const router  = express.Router();
const Show = require('../models/show-model');

router.post('/shows', (req, res, next) => {
  const { name, date, location, price } = req.body;

  if(name == '' || date == '' || location =='' || price ==''){
    // send error JSON if any of the fields is empty
    res.status(401).json({ message: "All fields need to be filled" })
    return;
  }

  Show.create({ name, date, location, price })
  .then(showDoc => res.json(showDoc))
  .catch(err => next(err));
})

router.get('/shows', (req, res, next) => {
  Show.find()
  .sort({createdAt: -1})
  .limit(10)
  .then(showsfromDB => res.json(showsfromDB))
  .catch(err => next(err));
})

router.post('/shows/:showId/update', (req, res, next) => {
console.log(req.body);
  const { name, date, location, price } = req.body;

  const updatedShow = { // <---------------------------------------
    name,                                                         //  |
    date,
    location,
    price                                                  //  |
    // owner: req.user._id	                                          //  |
  }                                                               //  |                                                         //  |
  Show.findByIdAndUpdate(req.params.showId, req.body) // <----------
  .then( theUpdatedShow => {
    res.json(theUpdatedShow);
  } )
  .catch( err => next(err) )
})

// DELETE A SPECIFIC SHOW

router.post('/shows/:id/delete', (req, res, next) => {
  Show.findByIdAndDelete(req.params.id)
  .then(() => {
    res.json('/shows');
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
