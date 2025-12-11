.PHONY: help install dev build clean lint format typecheck docker-up docker-down docker-dev docker-prod

help:
    @echo "Available commands:"
    @echo "  make install      - Install all dependencies"
    @echo "  make dev          - Run all services in development mode"
    @echo "  make build        - Build all applications"
    @echo "  make clean        - Clean all build artifacts"
    @echo "  make lint         - Run linting on all apps"
    @echo "  make format       - Format all code"
    @echo "  make typecheck    - Run type checking"
    @echo "  make docker-dev   - Start all services with Docker Compose (dev mode)"
    @echo "  make docker-prod  - Start all services with Docker Compose (prod build)"
    @echo "  make docker-down  - Stop all Docker services"

install:
    pnpm install
    cd apps/ai && pip install -r requirements.txt

dev:
    pnpm dev

build:
    pnpm build

clean:
    pnpm clean

lint:
    pnpm lint

format:
    pnpm format

typecheck:
    pnpm typecheck

docker-dev:
    docker-compose -f docker-compose.dev.yml up --build

docker-prod:
    docker-compose up --build

docker-down:
    docker-compose down
    docker-compose -f docker-compose.dev.yml down
