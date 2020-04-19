import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../../models/User";

module.exports = function () {
  // Use local strategy
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function (username, password, done) {
    User.findOne({
      where: {
        username: username.toLowerCase()
      }
    }).then(user => {
      if (!user) {
        return done(null, false, {
          message: 'Invalid username or password'
        });
      }

      bcrypt.compare(password, user.password, (err, same) => {
        if (err || !same) {
          return done(null, false, {
            message: 'Invalid username or password'
          });
        }

        return done(null, user);
      });
    }).catch(err => {
      return done(err);
    });
  }));
};
