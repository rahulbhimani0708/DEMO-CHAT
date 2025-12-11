#!/bin/bash

echo "🚀 Setting up DEMO-CHAT monorepo..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
pnpm install

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "🐍 Installing Python dependencies..."
    cd apps/ai
    pip3 install -r requirements.txt
    cd ../..
else
    echo "⚠️  Python 3 not found. Skipping Python dependencies."
    echo "   Install Python 3.11+ and run: cd apps/ai && pip install -r requirements.txt"
fi

# Copy environment files if they don't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
fi

if [ ! -f apps/web/.env.local ]; then
    echo "📝 Creating apps/web/.env.local file..."
    cp apps/web/.env.example apps/web/.env.local
fi

if [ ! -f apps/api/.env ]; then
    echo "📝 Creating apps/api/.env file..."
    cp apps/api/.env.example apps/api/.env
fi

if [ ! -f apps/ai/.env ]; then
    echo "📝 Creating apps/ai/.env file..."
    cp apps/ai/.env.example apps/ai/.env
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Edit .env files with your actual API keys and secrets"
echo "  2. Run 'pnpm dev' to start all services"
echo "  3. Visit http://localhost:3000 for the web app"
echo ""
echo "For more information, see README.md"
