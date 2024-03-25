/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let changingValue = init;
    return {
        
        increment: function(){
            return ++changingValue;
        },
        
        decrement: function(){
            return --changingValue;
        },
        
        reset: function(){
            changingValue = init;
            return changingValue;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */