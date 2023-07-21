# GET Route: Calculate Bit Manipulation of a Single Number

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
