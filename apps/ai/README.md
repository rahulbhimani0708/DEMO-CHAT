# AI Service

FastAPI-based AI service using Google's Gemini AI for chat completions.

## Setup

### Using pip

```bash
pip install -r requirements.txt
```

### Using Poetry

```bash
poetry install
```

## Running

### Development

```bash
# Using uvicorn directly
uvicorn app.main:app --reload --port 8000

# Using Poetry
poetry run uvicorn app.main:app --reload
```

### Production

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## API Endpoints

- `GET /health` - Health check endpoint
- `POST /api/chat/completion` - Chat completion endpoint
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation (ReDoc)

## Environment Variables

See `.env.example` for required configuration.
