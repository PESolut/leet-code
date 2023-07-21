# Problem 1 - single number [ LEET CODE 136 ](https://leetcode.com/problems/single-number/description/)

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Approaches:

1. Brute Force
Intuition:
Iterate through every element in the nums and check if any of the element does not appear twice, in that case return the element.
Time: O(n^2)
Space: O(1)

2. Use Sorting
Intuition:
If the elements of the nums array are sorted/when we sort it, we can compare the neighbours to find the single element. It is already mentioned that all other elements appear twice except one.
Time: O(nlogn) for sorting then O(n) to check neighbouring elements
Space: O(1)

3. Use Hashing/Set
Intuition:
i) As we iterate through the nums array we store the elements encountered and check if we find them again while iteration continues. While checking if we find them again, we maintain a single_element object/variable which stores that single element, eventually returning the single_element.
ii) The other way is to maintain a num_frequency hashmap/dictionary and iterate over it to find which has exactly 1 frequency and return that key/num.
Time: O(n) for iterating over the nums array
Space: O(n) for hashing

4. Use Xor/Bit Manipulation
Intuition:
Xor of any two num gives the difference of bit as 1 and same bit as 0.
Thus, using this we get 1 ^ 1 == 0 because the same numbers have same bits.
So, we will always get the single element because all the same ones will evaluate to 0 and 0^single_number = single_number.
Time: O(n)
Space: O(1)


## GET Route:

This route performs all versions of our approaches that take a list of numbers provided as a query parameter and returns the result.

## Request

- Method: `GET`
- URL: `/firstnumber`
- Query Parameters:
  - `list` (required): A JSON-encoded array of numbers on which each approaches function will be peformed

## Response

### Success Response (HTTP Status Code: 200 OK)

Content:
```json
{
  "bit manipulation output": 3
}

```

### Error Response (HTTP Status Code: 500 Internal Server Error)

```json
{
  "error": "Error message describing the issue."
}

```

### Example

## Request

```url
GET /firstnumber?list=[1,2,1,2,3]
```

## Response

```json
{
  "bit manipulation output": 3
}
```

## BitManipulationSingleNumber Function

This function performs the Bit Manipulation operation on an array of numbers using the XOR operator.

### Parameters

1. n (Array): An array of numbers on which the Bit Manipulation operation will be performed.

### Returns

1. r (Number): The bitwise XOR result of all the numbers in the provided array.

##  SortingSingleNumber Function

The function SortingSingleNumber takes an array of numbers (n) as input and returns the single number that appears only once in the array. All other numbers in the array appear twice except for this single number.

Sort the input array n in ascending order.
Loop through the sorted array using an index i, starting from 0.
For each element in the loop:
1.  Get the current element's value cN.
2. Get the next element's value nN (if it exists, otherwise nN will be undefined).
3. Compare cN with nN.
4. If cN is equal to nN, it means the current element has a pair, so skip the next element by incrementing i by 1. This is done because pairs are adjacent after sorting.
5. If cN is not equal to nN, it means cN is the lone element without a pair, so return cN as the result.
If no lone element is found in the loop, the function will implicitly return undefined.
This function effectively identifies the single number that appears only once in the sorted input array and returns it.

### Parameters

1. n (Array): An array of numbers

### Returns

1. n[i] (Number): The result of the single number within the array of numbers


