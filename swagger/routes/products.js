const router = {};
router.post('/api/products/', () => {
  // #swagger.tags = ['Products']
  // #swagger.summary = 'Public and private route for gettting bad products by user params and category'
  /* #swagger.responses[200] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/badProductsFind' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
            schema: { $ref: '#/components/requestBodies/userParams' },
        }}}
  */
  // #swagger.parameters['category'] = { example: 'зерновые' }
  // #swagger.parameters['currentPage'] = { example: '1' }
  // #swagger.parameters['pageSize'] = { example: '10' }
});

router.post('/api/products/categories', () => {
  // #swagger.tags = ['Products']
  /* #swagger.summary = 'Products endpoint for finding bad product categories by user params' */
  /* #swagger.responses[200] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/categories' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  // #swagger.responses[401] = { description: 'Missing authorization token' }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
            schema: { $ref: '#/components/requestBodies/userParams' },
        }}}
  */
  // #swagger.parameters['currentPage'] = { example: '1' }
  // #swagger.parameters['pageSize'] = { example: '2' }
});

router.get('/api/products/', () => {
  // #swagger.tags = ['Products']
  // #swagger.summary = 'Products endpoint for finding products by name and category'
  /* #swagger.responses[200] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/badProductsFind' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  // #swagger.parameters['title'] = { example: 'боби' }
  // #swagger.parameters['category'] = { example: 'зерно' }
  // #swagger.parameters['currentPage'] = { example: '1' }
  // #swagger.parameters['pageSize'] = { example: '2' }
});
