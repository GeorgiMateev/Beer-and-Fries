exports.beerAndFries = function (data) {
    var sort = function (arr) {
        arr.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        });
    };

    var beers = data
    .filter(function (item) {
        return item.type === 'beer';
    }).map(function (currentValue) {
        return currentValue.score;
    });

    var fries = data
    .filter(function (item) {
        return item.type === 'fries';
    }).map(function (currentValue) {
        return currentValue.score;
    });
    
    sort(beers);
    sort(fries);

    var result = 0;
    for (var i = 0; i < beers.length; i++) {
        result += beers[i] * fries[i];
    }

    return result;
};