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

function hasKeyWithValueOne(obj) {
    let value = 1
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            return Number(key)
   }
 }
 return false;
}

var HashingSingleNumber = function(nums) {
   // loop through nums array, create frequency object

   // key = nums[i]
   // value = times number appears in nums

   let freq = {}
   for(let i = 0; i < nums.length;i++){

       //check if the object exists, if not create key nums[i] with value of 1

       if(freq[nums[i]]){
           freq[nums[i]] = freq[nums[i]] + 1

       } else {
           freq[nums[i]] = 1
       }
   }
   // find / check for presence of key with value of 1
   const singleNumber = hasKeyWithValueOne(freq)
   return singleNumber
};

module.exports = {
    HashingSingleNumber,
    BitManipulationSingleNumber,
    SortingSingleNumber,
};