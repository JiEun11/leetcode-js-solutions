/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {

    switch(true){
        case Object.keys(obj).length === 0:
            return true;
        case Object.keys(obj).length > 0:
            return false;
        default:
            return new Error('Your parameter is not an object');
    }
    
};
