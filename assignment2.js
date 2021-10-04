// For Each
Array.prototype.myEach = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index]);
    }
};

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
array1.myEach(element => console.log(element));