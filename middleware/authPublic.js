const { usersService } = require('../service');
const { userParamsSchema } = require('../validation');

const passport = require('passport');
const authPublic = (req, res, next) => {
  passport.authenticate('cookie', { session: false }, async (_, user) => {
    try {
      await userParamsSchema.validateAsync(req.body);
      const id = user?.owner?._id;
      req.user = id
        ? await usersService
            .findByIdAndUpdate(id, req.body, {
              new: true,
              runValidators: true,
            })
            .lean()
        : null;
    } catch (error) {
      next(error);
    }
    next();
  })(req, res, next);
};

module.exports = authPublic;
