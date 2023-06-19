const router = {};
router.get('/api/auth/current', () => {
  // #swagger.tags = ['User']
  // #swagger.summary = 'Get current authenticate user'
  /* #swagger.responses[200] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/userCurrent' }
  }}} */
  // #swagger.responses[401] = { description: 'Missing authorization token' }
});
