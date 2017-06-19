var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var isExternal = require('../services/isexternal');
var populateHData = require('../services/populateHData');
var isloginpage = require('../services/isloginpage');
var htmlVersion = require('../services/htmlVersion');

router.post('/scrap', function(req, res){

  var url = req.body.url;

  //Start the request for the web scrapping
  request(url, function(error, response, html){

    //Send Error messages
    if(error){
      res.json({status: 'error', code: error.code});
      return;
    }else if(response.statusCode !== 200){
      res.json({status: response.statusCode});
      return;
    }


    if(!error) {

      var lineBreaks = html.split('\n');

      var countInternalLinks = 0;
      var countExternalLinks = 0;

      var docType = "";

      //Getting the docType
      for(var i =0; i<lineBreaks.length; i++){
        if(lineBreaks[i].indexOf("DOCTYPE") >= 0 ){
          docType = lineBreaks[i];
          break;
        }
      }

      var $ = cheerio.load(html);

      var data = {doctype: "", title: ""};
      var links = {external: {}, internal: {}};
      links.external.data = [];

      //Traverse the links in the page
      $('a').each(function (i, elem) {
        var href = $(this).attr('href');
        if(href){
            if(isExternal(href, url)){
              links.external.data.push({url: href});
              countExternalLinks++;
            }else{
              countInternalLinks++;
            }
        }
      });


      links.external.count = countExternalLinks;
      links.internal.count = countInternalLinks;

      data.loginPage = isloginpage($);
      data.doctype = docType;
      data.title = $('title').first().text();
      data.headings = populateHData($);
      data.links = links;
      data.version = htmlVersion(docType);

      res.json(data);
    }

  })
});


module.exports = router;
