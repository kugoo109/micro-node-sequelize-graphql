import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import config from "../config";
import User from "../../models/User";

module.exports = function () {
  // Use jwt strategy
  passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.tokenSecret,
    algorithms: config.tokenAlgorithms,
  }, 
  function (jwt_payload, done) {
    User.findOne({
      where: {
        id: jwt_payload.id,
      },
    }).then(user => {

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    }).catch(err => {
      return done(err);
    });
  }));
};
