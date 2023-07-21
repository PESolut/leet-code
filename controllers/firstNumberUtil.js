// use of Xor/Bit Manipulation
var BitManipulationSingleNumber = function(n) {
    let r = 0;
    for (let i = 0; i < n.length; i++) {
        r ^= n[i];
    }
return r
};

module.exports = BitManipulationSingleNumber