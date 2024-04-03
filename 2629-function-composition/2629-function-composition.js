/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result = x;
        functions.reverse().forEach((func) => {
            result = func(result);
        });
        return result;
    }
    
    // return function(x) {
    //     const result = functions.reduceRight((result, fn) => {
    //         return fn(result);
    //     },x);
    //     return result;
    // }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */