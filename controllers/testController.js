const express = require('express');
const router = express.Router();

router.get('/book', (req, res) => {
  res.json({ name: '图雀社区', website: 'https://tuture.co' });
})

router.get('/index', (req, res) => {
  res.render('index', { name: 'arterning' })
})


module.exports = router;
