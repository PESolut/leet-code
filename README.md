# Problem 1 - single number [ LEET CODE 136 ](https://leetcode.com/problems/single-number/description/)

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

## GET Route: Calculate Bit Manipulation of a Single Number

This route performs the bitwise XOR operation on a list of numbers provided as a query parameter and returns the result.

## Request

- Method: `GET`
- URL: `/`
- Query Parameters:
  - `list` (required): A JSON-encoded array of numbers on which the Bit Manipulation operation will be performed.

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
GET /?list=[1,2,1,2,3]
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

