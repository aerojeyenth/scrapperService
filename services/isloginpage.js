var isloginpage = function($){

    var loginpage = false;

    $('form').each(function (i, ele) {

        var frm = $(this);
        if(frm.serializeArray().length === 2){

            frm.find('input').each(function(i, ele){
                if($(this).attr('type') === 'password'){
                    loginpage = true;
                    
                    //Return false to break the .each of cheerio.js
                    return false;
                }
            });

        }
    });

    return loginpage;

};

module.exports = isloginpage;

