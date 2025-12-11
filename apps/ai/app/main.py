from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

app = FastAPI(title="DEMO-CHAT AI Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)


class ChatRequest(BaseModel):
    message: str
    context: list[str] | None = None


class ChatResponse(BaseModel):
    response: str
    model: str


@app.get("/health")
def health_check():
    return {"status": "ok", "service": "ai"}


@app.post("/api/chat/completion", response_model=ChatResponse)
async def chat_completion(request: ChatRequest):
    if not GEMINI_API_KEY:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY not configured"
        )

    try:
        model = genai.GenerativeModel("gemini-pro")
        
        prompt = request.message
        if request.context:
            context_text = "\n".join(request.context)
            prompt = f"Context:\n{context_text}\n\nUser: {request.message}"

        response = model.generate_content(prompt)
        
        return ChatResponse(
            response=response.text,
            model="gemini-pro"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
