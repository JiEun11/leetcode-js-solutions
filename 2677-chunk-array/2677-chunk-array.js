/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {

    let emptyArr = [];
    let answer = [];
    
    if(arr.length === 0){
        return arr;
    }
    
    for(let i = 0; i<arr.length; i=i+size){
        answer.push(arr.slice(i,i+size));
    }
    return answer;
};
