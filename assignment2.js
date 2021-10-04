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