const COOKIE_NAME = process.env.COOKIE_NAME;
const COOKIE_TIME = process.env.COOKIE_TIME; // minutes

const createCookie = (res, token) => {
  try {
    const expires = new Date(Date.now() + COOKIE_TIME * 60 * 1000);
    res.cookie(COOKIE_NAME, token, {
      signed: true,
      expires,
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = createCookie;
