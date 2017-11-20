const express = require('express');
const router = express.Router();
const query = require('../db/queries');


router.get('/', (req, res) => {
    const homeData = {
        title: 'BANE CODING',
        catch: 'Impress BANE with your knowledge of code'
    }
    res.render('home', homeData)
})

module.exports = router;