const router = {};
router.post('/api/auth/registration', () => {
  // #swagger.tags = ['Auth']
  // #swagger.summary = 'Authorization endpoint'
  /* #swagger.responses[201] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/userRegister' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  // #swagger.responses[409] = { description: 'Conflict, email in use' }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
            schema: { $ref: '#/components/requestBodies/registrationParams' },
        }}}
  */
});

router.post('/api/auth/login', () => {
  // #swagger.tags = ['Auth']
  // #swagger.summary = 'User authentication'
  /* #swagger.responses[200] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/userLogin' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  // #swagger.responses[401] = { description: 'Incorrect login or password' }
  // #swagger.responses[403] = { description: 'Email not exist' }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
            schema: { $ref: '#/components/requestBodies/loginParams' },
        }}}
  */
});

router.get('/api/auth/refresh', () => {
  // #swagger.tags = ['Auth']
  // #swagger.summary = 'Refresh user access token'
  /* #swagger.responses[200] = {
        description:'Success response',
        } */
  // #swagger.responses[401] = { description: 'Missing header with refresh token' }
});

router.get('/api/auth/logout', () => {
  // #swagger.tags = ['Auth']
  // #swagger.summary = 'User logout'
  // #swagger.responses[204] = { description: 'Success response' }
  // #swagger.responses[401] = { description: 'Missing authorization token' }
  // #swagger.responses[404] = { description: 'Invalid user / Invalid session' }
});
