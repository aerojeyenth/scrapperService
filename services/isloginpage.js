var isloginpage = function($){

    var loginpage = false;

    $('form').each(function (i, ele) {

        var frm = $(this);

        //Check for a form with only 2 serialized array values
        if(frm.serializeArray().length === 2){

            //Check if one of it is of type password.
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

