var htmlVersion = function(doctype){
    var version = '';
    var DOCTYPE = doctype.toUpperCase();

    if(DOCTYPE.indexOf('DOCTYPE') >= 0){
        version = 'HTML 5';
    }

    if(DOCTYPE.indexOf('HTML 4.01') >= 0){
        version = 'HTML 4.01';
    }

    if(DOCTYPE.indexOf('HTML 4.01 Transitional') >= 0){
        version = 'HTML 4.01 Transitional';
    }

    if(DOCTYPE.indexOf('HTML 4.01 Frameset') >= 0){
        version = 'HTML 4.01 Frameset';
    }

    if(DOCTYPE.indexOf('XHTML 1.0 Strict') >= 0){
        version = 'XHTML 1.0 Strict';
    }

    if(DOCTYPE.indexOf('XHTML 1.0 Transitional') >= 0){
        version = 'XHTML 1.0 Transitional';
    }

    if(DOCTYPE.indexOf('XHTML 1.0 Frameset') >= 0){
        version = 'XHTML 1.0 Frameset';
    }

    if(DOCTYPE.indexOf('XHTML 1.1') >= 0){
        version = 'XHTML 1.1';
    }


    return version;


};

module.exports = htmlVersion;

