# Portfolio Backend Server

Backend server for the portfolio project using Express.js and MongoDB.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection string and configuration.

## Configuration

Create a `.env` file in the server directory:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## Migration

To migrate data from file to MongoDB:

```bash
npm run migrate
```

This will import all portfolio data from `scripts/data.js` into MongoDB.

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/:field` - Get specific field (e.g., projects, skills)
- `PUT /api/portfolio` - Update portfolio data

## Project Structure

```
server/
├── config/          # Database configuration
│   └── database.js  # MongoDB connection
├── models/          # MongoDB models
│   └── Portfolio.js # Portfolio schema
├── routes/          # API routes
│   └── portfolio.js # Portfolio routes
├── scripts/         # Migration scripts
│   ├── migrate.js   # Migration script
│   └── data.js      # Portfolio data
├── server.js        # Server entry point
└── package.json     # Dependencies
```

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: CORS middleware
- **dotenv**: Environment variables

## Development Dependencies

- **nodemon**: Auto-reload server during development

