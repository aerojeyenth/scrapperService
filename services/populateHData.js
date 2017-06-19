var populateHData = function($){

    var headings = {h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, h6: {}};

    var hLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    hLevels.forEach(function (hLevel) {
        //Populate Length Values
        headings[hLevel].count = $(hLevel).length;

        //Initialize an empty array for values of headings
        headings[hLevel].data = [];

        $(hLevel).each(function(){
            if($(this).text())
                headings[hLevel].data.push($(this).text().trim());
        });

    });

    return headings;

};

module.exports = populateHData;
