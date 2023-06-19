const { cookieName, expiresCookieTime } = require('./constants');

const DEV_MODE = process.env.NODE_ENV === 'development';

const createCookie = (res, token) => {
  try {
    const expires = new Date(Date.now() + expiresCookieTime * 60 * 1000);
    res.cookie(cookieName, token, {
      signed: true,
      expires,
      sameSite: DEV_MODE ? 'none' : true,
      secure: !DEV_MODE,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = createCookie;
