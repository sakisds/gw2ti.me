/**
 * An array that warps around forever.
 * @param array
 * @constructor
 */
function RingArray(array){
    this.array = array;
    this.length = array.length;
}

/**
 * Returns the object at index i. This index will warp around if it's larger than the array's length.
 * @param i Index
 * @returns {*}
 */
RingArray.prototype.get = function(i) {
    // Bring index down to array length
    while (i > this.length - 1) {
        i -= this.length - 1;
    }

    // Return the requested object
    return this.array[i];
};

/**
 * Starting at i, return a specific number of objects. It warps around the array if it goes above the array's length.
 * @param i Index
 * @param count How many objects to return
 */
RingArray.prototype.getMany = function(i, count) {
    var result = [];

    for (var x = 0; x < count; x++) {
        result.push(this.get(i + x));
    }

    return result;
};