# DEMO-CHAT

A modern, full-stack chat application with AI capabilities built as a monorepo.

## 🚀 Project Overview

DEMO-CHAT is a comprehensive chat application that demonstrates modern web development practices with a monorepo architecture. It features a Next.js frontend, Express API backend, and FastAPI AI service powered by Google's Gemini AI.

## 📁 Project Structure

```
demo-chat-monorepo/
├── apps/
│   ├── web/              # Next.js + Tailwind CSS frontend
│   ├── api/              # Express + TypeScript backend API
│   └── ai/               # FastAPI + Gemini AI service
├── packages/
│   ├── eslint-config/    # Shared ESLint configuration
│   └── typescript-config/# Shared TypeScript configuration
├── docker-compose.yml    # Docker Compose orchestration
└── pnpm-workspace.yaml  # PNPM workspace configuration
```

## 🛠️ Tech Stack

### Frontend (`apps/web`)
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: pnpm

### Backend API (`apps/api`)
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: SQLite (better-sqlite3)
- **Authentication**: JWT (jsonwebtoken)

### AI Service (`apps/ai`)
- **Framework**: FastAPI
- **Language**: Python 3.11+
- **AI Provider**: Google Gemini AI
- **Package Manager**: Poetry (with requirements.txt fallback)

### Shared Tooling
- **Monorepo**: pnpm workspaces
- **Linting**: ESLint
- **Formatting**: Prettier
- **Type Checking**: TypeScript (Node.js apps), mypy (Python)
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0
- **Python**: >= 3.11 (for AI service)
- **Docker** & **Docker Compose** (optional, for containerized development)

## 🔧 Installation

### Quick Setup (Recommended)

Run the automated setup script:

```bash
git clone <repository-url>
cd demo-chat-monorepo
chmod +x scripts/setup.sh
./scripts/setup.sh
```

The script will:
- Install pnpm (if not present)
- Install all Node.js dependencies
- Install Python dependencies
- Copy environment file templates

### Manual Setup

If you prefer manual setup:

#### 1. Clone the repository

```bash
git clone <repository-url>
cd demo-chat-monorepo
```

#### 2. Install dependencies

```bash
# Install Node.js dependencies for all apps
pnpm install

# Install Python dependencies for AI service
cd apps/ai
pip install -r requirements.txt
# OR using Poetry
poetry install
```

#### 3. Set up environment variables

```bash
# Copy root environment example
cp .env.example .env

# Copy app-specific environment examples
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
cp apps/ai/.env.example apps/ai/.env
```

### 4. Configure required secrets

Edit the `.env` files with your actual values:

- **JWT_SECRET**: A secure random string for JWT token signing
- **GEMINI_API_KEY**: Your Google Gemini API key (get one at https://makersuite.google.com/app/apikey)
- **DB_PATH**: Path for SQLite database (default: `./data/chat.db`)

## 🚀 Running the Application

### Option 1: Local Development (Recommended)

Run all services in parallel:

```bash
# From the root directory
pnpm dev
```

Or run services individually:

```bash
# Web app (Next.js) - http://localhost:3000
pnpm dev:web

# API server (Express) - http://localhost:3001
pnpm dev:api

# AI service (FastAPI) - http://localhost:8000
cd apps/ai
uvicorn app.main:app --reload
```

### Option 2: Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Option 3: VS Code Dev Container

1. Open the project in VS Code
2. Install the "Dev Containers" extension
3. Press `F1` and select "Dev Containers: Reopen in Container"

## 🔗 Service URLs

- **Web App**: http://localhost:3000
- **API Server**: http://localhost:3001
- **AI Service**: http://localhost:8000
- **API Health Check**: http://localhost:3001/health
- **AI Health Check**: http://localhost:8000/health
- **AI Docs**: http://localhost:8000/docs (FastAPI interactive documentation)

## 📦 Available Scripts

### Root Level

```bash
pnpm dev           # Run all apps in development mode
pnpm build         # Build all apps
pnpm lint          # Lint all apps
pnpm format        # Format code with Prettier
pnpm format:check  # Check code formatting
pnpm typecheck     # Type check all TypeScript apps
pnpm clean         # Clean all build artifacts and dependencies
```

### Web App (`apps/web`)

```bash
pnpm dev           # Start Next.js dev server
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run ESLint
pnpm typecheck     # Run TypeScript type checking
```

### API (`apps/api`)

```bash
pnpm dev           # Start Express dev server with hot reload
pnpm build         # Compile TypeScript to JavaScript
pnpm start         # Start production server
pnpm lint          # Run ESLint
pnpm typecheck     # Run TypeScript type checking
```

### AI Service (`apps/ai`)

```bash
# Using uvicorn directly
uvicorn app.main:app --reload --port 8000

# Using Poetry
poetry run uvicorn app.main:app --reload

# Linting & Formatting
black app/
ruff check app/
mypy app/
```

## 🗄️ Database

The API uses SQLite for data persistence. The database is automatically initialized on first run with the following tables:

- **users**: User accounts and authentication
- **messages**: Chat messages
- **chat_sessions**: Chat conversation sessions

Database file location: `apps/api/data/chat.db` (or as configured in `DB_PATH`)

## 🔑 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. Register or login via `/api/auth/register` or `/api/auth/login`
2. Receive a JWT token in the response
3. Include the token in subsequent requests: `Authorization: Bearer <token>`

## 🤖 AI Integration

The AI service uses Google's Gemini AI model for chat completions:

- **Endpoint**: `POST /api/chat/completion`
- **Request**: `{ "message": "Your message", "context": ["Previous messages..."] }`
- **Response**: `{ "response": "AI response", "model": "gemini-pro" }`

## 📝 Development Guidelines

### Code Style

- **JavaScript/TypeScript**: ESLint + Prettier
- **Python**: Black + Ruff + mypy
- Line length: 100 characters
- Use single quotes for JavaScript/TypeScript
- Use async/await for asynchronous operations

### Commit Conventions

Follow conventional commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `chore:` Maintenance tasks
- `refactor:` Code refactoring

## 🐳 Docker Configuration

Each app has its own Dockerfile:

- `apps/web/Dockerfile`: Multi-stage Next.js build
- `apps/api/Dockerfile`: Node.js TypeScript API
- `apps/ai/Dockerfile`: Python FastAPI service

The `docker-compose.yml` orchestrates all services with:
- Automatic service networking
- Volume mounting for hot reload in development
- SQLite data persistence via named volume

## 🔒 Security Notes

⚠️ **Important**: Before deploying to production:

1. Change all default secrets in `.env` files
2. Use strong, randomly generated values for `JWT_SECRET`
3. Secure your `GEMINI_API_KEY`
4. Enable HTTPS/TLS for all services
5. Implement proper authentication middleware
6. Add rate limiting to API endpoints
7. Validate and sanitize all user inputs

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Run tests and linting: `pnpm lint && pnpm typecheck`
4. Commit your changes: `git commit -m 'feat: add my feature'`
5. Push to the branch: `git push origin feature/my-feature`
6. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🆘 Troubleshooting

### Port already in use

If you get port conflicts, ensure no other services are running on ports 3000, 3001, or 8000:

```bash
# Check what's using the port (macOS/Linux)
lsof -i :3000
lsof -i :3001
lsof -i :8000

# Kill the process if needed
kill -9 <PID>
```

### pnpm not found

Install pnpm globally:

```bash
npm install -g pnpm
```

### Python dependencies issues

Make sure you're using Python 3.11+:

```bash
python --version
# or
python3 --version
```

### Docker build fails

Clear Docker cache and rebuild:

```bash
docker-compose down -v
docker system prune -a
docker-compose up --build
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [pnpm Workspaces](https://pnpm.io/workspaces)

---

Built with ❤️ using modern web technologies
