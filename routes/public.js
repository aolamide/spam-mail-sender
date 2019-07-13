const router = require('express').Router();
const path = require('path');

const renderHtml = (req, res) => {
    const html = path.join(__dirname, '../public/index.html');
    res.sendFile(html)
}

router.get('/', renderHtml);

module.exports = router;