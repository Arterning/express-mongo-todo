const express = require('express');
const router = express.Router();

router.get('/book', (req, res) => {
  res.json({ name: '图雀社区', website: 'https://tuture.co', auth: req.auth });
})



module.exports = router;
