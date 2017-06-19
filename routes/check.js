var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/check', function(req, res, next) {

    var link = req.body.link;

    request(link, function (error, response, body) {
        if(response)
            res.json({status: response.statusCode, url: link});

        if(error)
            res.json({status: 'error', code: error.code, url: link });
    });


});


module.exports = router;
