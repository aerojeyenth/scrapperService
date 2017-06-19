var isExternal = function (href, url) {

    //Matches http://, https://, or whatever://(external links)
    var EXTERNAL_URLS_PATTERN = /^(\w+:)?\/\//;
    var DOMAIN_PATTERN = /:\/\/(.[^/]+)/;

    var hrefDomainNameArr = href.match(DOMAIN_PATTERN);
    var urlDomainNameArr = url.match(DOMAIN_PATTERN);

    if(hrefDomainNameArr && urlDomainNameArr){

        if(hrefDomainNameArr[1].indexOf('?') >= 0){
            hrefDomainNameArr[1] = hrefDomainNameArr[1].slice(0, hrefDomainNameArr[1].indexOf('?'));
        }

        var hrefDomainName = hrefDomainNameArr[1].split('.').slice(-2).join('.');
        var urlDomainName = urlDomainNameArr[1].split('.').slice(-2).join('.');
    }

    return href.search(EXTERNAL_URLS_PATTERN) !== -1 && hrefDomainName !== urlDomainName;

};

module.exports = isExternal;
