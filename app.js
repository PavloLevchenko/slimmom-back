const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const LOCAL_URL = process.env.LOCAL_URL;
const PUBLIC_URL = process.env.PUBLIC_URL;
const DEVELOPMENT = process.env.NODE_ENV === 'development';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { products, auth, diary } = require('./routes');
const { handleErrors } = require('./middleware');

const app = express();
const cookieSecret = process.env.COOKIE_SECRET;
app.use(cookieParser(cookieSecret));
const formatsLogger = DEVELOPMENT ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(
  cors({
    origin: DEVELOPMENT ? LOCAL_URL : PUBLIC_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/config-passport');
app.use('/api/products', products);
app.use('/api/auth', auth);
app.use('/api/diary', diary);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

handleErrors(app);

module.exports = {
  app,
};
