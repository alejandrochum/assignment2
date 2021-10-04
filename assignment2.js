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

// SOME //
Array.prototype.mySome = function(callback) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element) === true) {
            return true;
        }
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function() {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element) === false) {
            return false;
        }
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callback) {
    let res = arguments[1];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        res = callback(res, element);
    }
    return res;
};

// INCLUDES //
Array.prototype.myIncludes = function(val) {
    for (let index = 0; index < this.length; index++) {
        if (this[index] === val)
            return true;
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(val, startIndex) {
    if (startIndex === undefined) {
        startIndex = 0;
    }
    for (let index = startIndex; index < this.length; index++) {
        const element = this[index];
        if (element === val)
            return index;
    }
    return -1;
};

// PUSH //
Array.prototype.myPush = function(val) {
    let res = this;
    var args = arguments;
    for (let index = 0; index < args.length; index++) {
        res[res.length] = args[index];
    }
    return res;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(val, startIndex) {
    let res = -1;
    if (startIndex === undefined) {
        startIndex = 0;
    }
    for (let index = startIndex; index < this.length; index++) {
        const element = this[index];
        if (element === val)
            res = index;
    }
    return res;
};

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
// KEYS //
Object.grabKeys = function(object) {
    var res = [];
    for (const [key] of Object.entries(object)) {
        res.push(`${key}`);
    }
    return res;
};