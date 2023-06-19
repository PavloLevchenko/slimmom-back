const router = {};
router.post('/api/diary/', () => {
  // #swagger.tags = ['Diary']
  // #swagger.summary = 'Diary endpoint, adding information to your diary'
  /* #swagger.responses[201] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/noteCreated' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  // #swagger.responses[401] = { description: 'Missing authorization token' }
  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
            schema: { $ref: '#/components/requestBodies/noteParams' },
        }}}
  */
});

router.get('/api/diary/:date', () => {
  // #swagger.tags = ['Diary']
  // #swagger.summary = 'Diary endpoint, geting all information by the date'
  /* #swagger.responses[200] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/notesFind' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  // #swagger.responses[401] = { description: 'Missing authorization token' }
  // #swagger.parameters['date'] = { example: '2022-21-12' }
});

router.delete('/api/diary/:noteId', () => {
  // #swagger.tags = ['Diary']
  // #swagger.summary = 'Diary endpoint, deleting product from the selected day'
  /* #swagger.responses[200] = {
        description:'Success response',
        content: {
          "application/json": {
              schema: { $ref: '#/components/responses/noteDeleted' }
  }}} */
  // #swagger.responses[400] = { description: 'Bad request' }
  // #swagger.responses[401] = { description: 'Missing authorization token' }
});
