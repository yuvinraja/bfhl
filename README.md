# BFHL REST API

This is a REST API that processes an array of data and returns various categorized results.

## API Endpoints

**GET** `/bfhl` - Returns operation code
**POST** `/bfhl` - Processes data array

## Deployment

This API is deployed on Vercel and can be accessed at: `https://your-project-name.vercel.app/bfhl`

## Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

## POST Request Format

```json
{
  "data": ["array", "of", "mixed", "data", "1", "2", "$", "#"]
}
```

## Response Format

```json
{
    "is_success": true,
    "user_id": "yuvin_raja_29082003",
    "email": "yuvin.raja@example.com",
    "roll_number": "21BCE1234",
    "odd_numbers": [
        "1"
    ],
    "even_numbers": [
        "2"
    ],
    "alphabets": [
        "ARRAY",
        "OF",
        "MIXED",
        "DATA"
    ],
    "special_characters": [
        "$",
        "#"
    ],
    "sum": "3",
    "concat_string": "aTaDdExImFoYaRrA"
}
```

## Running the Server

```bash
npm run dev
```

## Testing

The server will be available at `http://localhost:3000`

### Example Test Cases

#### Test Case 1

```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

#### Test Case 2

```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'
```

#### Test Case 3

```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

## Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `POST /api/bfhl` - Main data processing endpoint
