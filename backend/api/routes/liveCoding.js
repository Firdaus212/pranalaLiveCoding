const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    console.log("nilainya req", req.body);
    res.status(200).json({
        message: 'Handling post'
    })
});

module.exports = router;