var express = require('express');
var router = express.Router();

router.get('/alive', (_req, res) => {
    res.status(200).json({
        message: 'app is Alive'
    });
  });
  
router.post('/app-status', (req, res) => {
      const body = req.body;
      res.status(201).json({
          database: 'on',
          redis: 'off',
          licenses: ['full'],
          params: body 
      });
});

module.exports = router;
