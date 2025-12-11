# API Service

Express.js backend API with TypeScript, SQLite database, and JWT authentication.

## Setup

```bash
pnpm install
```

## Running

### Development

```bash
pnpm dev
```

### Production

```bash
pnpm build
pnpm start
```

## API Endpoints

### Health Check
- `GET /health` - Returns API health status

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Chat
- `GET /api/chat/messages` - Get recent messages
- `POST /api/chat/messages` - Create a new message

## Database

The API uses SQLite for data storage. The database is automatically initialized on first run.

Database location: `./data/chat.db` (or as configured in `DB_PATH`)

## Environment Variables

See `.env.example` for required configuration.
