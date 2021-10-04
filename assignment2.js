// For Each
Array.prototype.myEach = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index]);
    }
};

// Map
Array.prototype.myMap = function(callback) {
    var res = [];
    for (let index = 0; index < this.length; index++) {
        const element = callback(this[index]);
        res.push(element);
    }
    return res;
};

// FILTER //
Array.prototype.myFilter = function(callback) {
    var res = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element) === true) {
            res.push(element);
        }
    }
    return res;
};