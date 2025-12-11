# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial monorepo structure with pnpm workspaces
- Next.js 14 frontend application (`apps/web`)
  - Tailwind CSS integration
  - TypeScript support
  - App Router architecture
- Express.js backend API (`apps/api`)
  - TypeScript support
  - SQLite database with better-sqlite3
  - JWT authentication
  - Health check endpoints
  - Chat and authentication routes
- FastAPI AI service (`apps/ai`)
  - Google Gemini AI integration
  - Chat completion endpoint
  - Health check endpoint
  - Interactive API documentation
- Shared ESLint configuration package
- Shared TypeScript configuration package
- Docker support for all services
  - Production Dockerfiles
  - Development Dockerfiles
  - Docker Compose orchestration
  - Docker Compose development configuration
- Development tooling
  - Prettier for code formatting
  - ESLint for linting
  - TypeScript for type checking
  - Turbo for optimized builds
- Documentation
  - Comprehensive README with setup instructions
  - Contributing guidelines
  - Project structure documentation
  - Individual app READMEs
- Environment configuration
  - Root `.env.example` with shared secrets
  - App-specific `.env.example` files
- Development scripts
  - Automated setup script
  - Makefile with common commands
- VS Code Dev Container configuration
- MIT License

[Unreleased]: https://github.com/yourusername/demo-chat/compare/main...HEAD
