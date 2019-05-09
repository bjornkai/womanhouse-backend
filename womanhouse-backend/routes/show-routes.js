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

// GET /shows/:id - GET THE DETAILS OF ONLY ONE SHOW

router.get("/shows/:id", (req, res, next) => {
  const { id } = req.params;
  Show.findById(id)
    .then(showDoc => res.json(showDoc))
    .catch(err => next(err));
});

// -------~~~~~~~~~~------------   UPDATE SHOW  -----------~~~~~~~~~~-------------

// PUT /shows/:id - Update ONE show
router.put("/shows/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, date, location, price } = req.body;
  console.log(req.body, req.params);
  // Show.findByIdAndUpdate(id, req.body)
  Show.findByIdAndUpdate(
    id,
   { name, date, location, price } 
  )
  .then(showDoc => res.json(showDoc))
  .catch(err => next(err));
});

// -------~~~~~~~~~~------------   DELETE SHOW  -----------~~~~~~~~~~-------------

// DELETE /shows/:id - Delete ONE show

router.delete("/shows/:id", (req, res, next) => {
  const { id } = req.params;
  Show.findByIdAndRemove(id)
    .then(showDoc => res.json({message: `You successfully deleted ${showDoc.name}`}))
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
