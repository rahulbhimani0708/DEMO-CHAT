# Contributing to DEMO-CHAT

Thank you for your interest in contributing to DEMO-CHAT! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `pnpm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Setting Up Your Environment

```bash
# Install Node.js dependencies
pnpm install

# Install Python dependencies for AI service
cd apps/ai
pip install -r requirements.txt

# Copy environment files
cp .env.example .env
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
cp apps/ai/.env.example apps/ai/.env
```

### Running the Development Server

```bash
# Run all services
pnpm dev

# Or run individually
pnpm dev:web  # Next.js on :3000
pnpm dev:api  # Express on :3001
cd apps/ai && uvicorn app.main:app --reload  # FastAPI on :8000
```

## Code Style

### JavaScript/TypeScript

- Use ESLint and Prettier (configured in the repo)
- Run `pnpm lint` before committing
- Run `pnpm format` to auto-format code
- Line length: 100 characters
- Use single quotes
- Use TypeScript for type safety

### Python

- Use Black for formatting: `black app/`
- Use Ruff for linting: `ruff check app/`
- Use mypy for type checking: `mypy app/`
- Line length: 100 characters
- Follow PEP 8 guidelines

## Commit Messages

Follow the Conventional Commits specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add user authentication to chat
fix: resolve database connection timeout
docs: update installation instructions
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Run all checks before submitting:
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm format:check
   ```
3. Ensure your code builds successfully: `pnpm build`
4. Write clear, descriptive PR titles and descriptions
5. Link any related issues in the PR description

## Testing

- Write tests for new features
- Ensure existing tests pass
- Aim for good test coverage

## Documentation

- Update relevant documentation for any changes
- Add JSDoc/docstrings for new functions and classes
- Update README.md if adding new features or changing setup

## Questions?

Feel free to open an issue for:

- Bug reports
- Feature requests
- Questions about the codebase
- Suggestions for improvements

Thank you for contributing! 🎉
