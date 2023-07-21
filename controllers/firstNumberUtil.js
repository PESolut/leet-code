// use of Xor/Bit Manipulation
var BitManipulationSingleNumber = function(n) {
    let r = 0;
    for (let i = 0; i < n.length; i++) {
        r ^= n[i];
    }
return r
};

var SortingSingleNumber = function(n) {
    // sort the numbers
    n.sort()
    // loop through the numbers
    for(let i = 0; i < n.length; i++){
        let cN = n[i]
        let nN = n[i+1]
        // check if current element number is equal to the next element number
        // if so, skip next element and continue loop
        // if not, return current element as that is the lone digit
        if(cN == nN){
            i++
        } else {
            return n[i]
        }
    }
};

module.exports = BitManipulationSingleNumber