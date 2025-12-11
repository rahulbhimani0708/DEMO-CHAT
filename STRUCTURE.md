# Project Structure

This document provides an overview of the monorepo structure.

```
demo-chat-monorepo/
├── .devcontainer/
│   └── devcontainer.json          # VS Code dev container configuration
├── apps/
│   ├── web/                        # Next.js frontend application
│   │   ├── public/                 # Static assets
│   │   ├── src/
│   │   │   └── app/                # Next.js App Router pages
│   │   │       ├── layout.tsx      # Root layout
│   │   │       ├── page.tsx        # Home page
│   │   │       └── globals.css     # Global styles
│   │   ├── .dockerignore           # Docker ignore rules
│   │   ├── .env.example            # Environment variables template
│   │   ├── .eslintrc.js            # ESLint configuration
│   │   ├── Dockerfile              # Production Docker image
│   │   ├── Dockerfile.dev          # Development Docker image
│   │   ├── next.config.js          # Next.js configuration
│   │   ├── package.json            # Dependencies and scripts
│   │   ├── postcss.config.js       # PostCSS configuration
│   │   ├── tailwind.config.js      # Tailwind CSS configuration
│   │   └── tsconfig.json           # TypeScript configuration
│   ├── api/                        # Express backend API
│   │   ├── data/                   # SQLite database directory
│   │   │   └── .gitkeep
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   │   ├── auth.ts         # Authentication routes
│   │   │   │   └── chat.ts         # Chat routes
│   │   │   ├── db.ts               # Database initialization
│   │   │   └── index.ts            # Express server entry point
│   │   ├── .dockerignore           # Docker ignore rules
│   │   ├── .env.example            # Environment variables template
│   │   ├── .eslintrc.js            # ESLint configuration
│   │   ├── Dockerfile              # Production Docker image
│   │   ├── Dockerfile.dev          # Development Docker image
│   │   ├── package.json            # Dependencies and scripts
│   │   └── tsconfig.json           # TypeScript configuration
│   └── ai/                         # FastAPI AI service
│       ├── app/
│       │   ├── __init__.py         # Python package marker
│       │   └── main.py             # FastAPI application
│       ├── .dockerignore           # Docker ignore rules
│       ├── .env.example            # Environment variables template
│       ├── Dockerfile              # Production Docker image
│       ├── Dockerfile.dev          # Development Docker image
│       ├── pyproject.toml          # Poetry configuration
│       └── requirements.txt        # Python dependencies
├── packages/
│   ├── eslint-config/              # Shared ESLint configuration
│   │   ├── index.js                # Base ESLint config
│   │   ├── next.js                 # Next.js ESLint config
│   │   └── package.json
│   └── typescript-config/          # Shared TypeScript configuration
│       ├── base.json               # Base TypeScript config
│       ├── nextjs.json             # Next.js TypeScript config
│       ├── node.json               # Node.js TypeScript config
│       └── package.json
├── scripts/
│   └── setup.sh                    # Setup script for first-time installation
├── .env.example                    # Root environment variables template
├── .gitignore                      # Git ignore rules
├── .prettierignore                 # Prettier ignore rules
├── .prettierrc                     # Prettier configuration
├── CONTRIBUTING.md                 # Contribution guidelines
├── LICENSE                         # MIT License
├── Makefile                        # Common commands
├── README.md                       # Main documentation
├── STRUCTURE.md                    # This file
├── docker-compose.yml              # Production Docker Compose configuration
├── docker-compose.dev.yml          # Development Docker Compose configuration
├── package.json                    # Root package.json with workspace scripts
├── pnpm-workspace.yaml             # PNPM workspace configuration
└── turbo.json                      # Turborepo configuration
```

## Directory Purposes

### `/apps`
Contains all applications in the monorepo. Each app is independently deployable.

### `/packages`
Contains shared packages used across multiple apps:
- **eslint-config**: Shared ESLint rules and configurations
- **typescript-config**: Shared TypeScript compiler configurations

### `/scripts`
Utility scripts for development and deployment tasks.

## Key Configuration Files

| File | Purpose |
|------|---------|
| `pnpm-workspace.yaml` | Defines workspace packages for pnpm |
| `turbo.json` | Configures Turborepo for optimized builds |
| `.prettierrc` | Code formatting rules |
| `.gitignore` | Files to ignore in git |
| `docker-compose.yml` | Multi-container Docker orchestration (production) |
| `docker-compose.dev.yml` | Multi-container Docker orchestration (development) |

## Technology Stack by App

### Web (`apps/web`)
- Next.js 14 (React framework)
- Tailwind CSS (styling)
- TypeScript (type safety)

### API (`apps/api`)
- Express.js (web framework)
- TypeScript (type safety)
- better-sqlite3 (database)
- jsonwebtoken (authentication)

### AI (`apps/ai`)
- FastAPI (web framework)
- Python 3.11+
- Google Generative AI (Gemini)
- Pydantic (data validation)

## Port Allocation

- **3000**: Web frontend (Next.js)
- **3001**: API backend (Express)
- **8000**: AI service (FastAPI)

## Environment Variables

Each app has its own `.env.example` file documenting required environment variables:

- Root `.env`: Shared secrets (JWT_SECRET, GEMINI_API_KEY, DB_PATH)
- `apps/web/.env.local`: Frontend configuration
- `apps/api/.env`: Backend configuration
- `apps/ai/.env`: AI service configuration
