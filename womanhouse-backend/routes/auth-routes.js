const express = require('express');
const router = express.Router();
const User = require('../models/user-model');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;


router.post("/signup", (req, res, next) => {
  const { email, originalPassword } = req.body;

  if(email == '' || originalPassword.match(/[0-9]/) === null){
    // send error JSON if any of the fields is empty or password doesn't contain a number
    res.status(401).json({ message: "All fields need to be filled and password must contain a number." })
    return;
  }

  User.findOne({ email })
  .then(foundUser => {
    if(foundUser !==null){
      res.status(401).json({ message: "A user with the same email is already registered!" })
      return;
    }

    // encrypt the submitted password before saving
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const encryptedPassword = bcrypt.hashSync(originalPassword, salt);

      User.create({ email, encryptedPassword })
      .then(userDoc => {
        // if all good, log in the user automatically
        // "req.logIn()" is a Passport method that calls "serializeUser()"
        // (that saves the USER ID in the session)
          req.login(userDoc, () => {
            // hide "encryptedPassword" before sending the JSON (it's a security risk)
            userDoc.encryptedPassword = undefined;
            res.json({ userDoc });
          });
      })
      .catch( err => { 
        // res.json({message: "You cannot access this feature."})
        res.status(401).send("You are not able to access this feature."); //closing User.create()
      })
  })
  .catch( err => next(err)); // closing User.findOne();
})

//////////////// LOGIN /////////////////////
router.post("/login", (req, res, next) => {

  // LOGIN WITH PASSPORT-LOCAL-STRATEGY:
  passport.authenticate('local', (err, userDoc, failureDetails) => {

    if (err) {
      res.status(500).json({ message: 'Something went wrong' })
      return;
    }

    if (!userDoc) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(userDoc, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong while login!' });
        return;
      }
      // We are now logged in (notice req.user) => we can send req.user since we have it available
      // or userDoc, which is the placeholder how we named the user document we found in DB based on inputted email and password
      // res.json(req.user);
      res.json({ userDoc });
    });
  })(req, res, next);
})

//////////////// LOGOUT /////////////////////

router.delete("/logout", (req, res, next) => {
  // "req.logOut()" is a Passport method that removes the user ID from session
  req.logOut();

  // send empty "userDoc" when you log out
  res.json({ userDoc: null });
});

// GET "/checkuser" allows the client to check to see:
// (a) if we are logged-in
// (b) what are the details of the logged-in user
router.get("/checkuser", (req, res, next) => {
  if (req.user) {
  // hide "encryptedPassword" before sending the JSON (it's a security risk)
    req.user.encryptedPassword = undefined;
    res.json({ userDoc: req.user });
  }
  else {
    res.json({ userDoc: null });
  }
});

module.exports = router;