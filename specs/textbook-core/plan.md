# Technical Plan: Physical AI & Humanoid Robotics Interactive Textbook

## Architecture Overview

### Frontend
- **Framework**: Docusaurus for static site generation
- **Deployment**: Vercel
- **Components**:
  - Textbook chapter display
  - Interactive chat interface
  - User profile and settings
  - Translation toggle
  - Personalization controls

### Backend
- **Framework**: FastAPI for API services
- **Deployment**: Railway
- **Services**:
  - RAG service for question answering
  - Authentication service using Better-Auth
  - AI agent services (summary, quiz, translator, personalization)
  - Database access layer

### Database Layer
- **Primary DB**: Neon (PostgreSQL) for user data, profiles, and preferences
- **Vector DB**: Qdrant for RAG functionality (textbook content embeddings)

## Technology Stack

### Backend Technologies
- Python 3.11+
- FastAPI for web framework
- Better-Auth for authentication
- sentence-transformers for embeddings (all-MiniLM-L6-v2)
- OpenAI API for response generation (GPT-4)
- HuggingFace models for translation

### Frontend Technologies
- Docusaurus for documentation framework
- React for interactive components
- Node.js 18+

### Infrastructure
- Vercel for frontend deployment
- Railway for backend deployment
- Neon PostgreSQL for relational data
- Qdrant for vector storage

## Project Structure
```
backend/
├── rag/                   # RAG service with FastAPI
│   ├── app/
│   │   └── main.py        # Main FastAPI application for RAG service
│   ├── models/
│   ├── services/
│   └── routes/
├── agents/                # AI agent services
├── auth/                  # Better-Auth integration
├── database/              # Database schemas and migrations
└── shared/
    └── types.py           # Shared data types and interfaces

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── styles/
├── static/
│   └── textbook-content/
│       └── chapters/
├── docusaurus.config.js
└── package.json
```

## Key Components Design

### 1. RAG Service
- Embeddings: sentence-transformers/all-MiniLM-L6-v2
- Vector storage in Qdrant with cosine similarity
- Top-k (4-6) retrieval with reranking
- OpenAI GPT-4 for response generation
- Strict content grounding to prevent hallucinations

### 2. AI Agents
- **Summary Agent**: Auto-generates chapter summaries using LLMs
- **Quiz Agent**: Creates quizzes based on chapter content
- **Translator Agent**: Handles Urdu translation with formatting preservation
- **Personalization Agent**: Adapts content based on user background

### 3. Personalization Engine
- User background classification: beginner, intermediate, advanced, researcher
- Content complexity adjustment based on user profile
- Adaptive examples and explanations
- Context-aware content delivery

### 4. Translation Service
- Preserves markdown formatting during Urdu translation
- Uses HuggingFace translation models optimized for educational content
- Caching for frequently accessed translations

## Security Considerations
- Secure API key management
- Input validation for all user inputs
- Rate limiting for API endpoints
- Authentication for all user-specific features
- Data encryption at rest and in transit

## Performance Requirements
- Page load time: < 3 seconds
- Chat response time: < 5 seconds
- Support for 100+ concurrent users
- Optimized vector search for RAG responses
- Caching strategies for common operations

## Deployment Strategy
### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set build command to `npm run build`
3. Set output directory to `build`

### Backend (Railway)
1. Connect GitHub repository to Railway
2. Set build command to `pip install -r requirements.txt`
3. Set start command to `uvicorn rag.app.main:app --host 0.0.0.0 --port $PORT`

## Environment Variables
Backend requires:
- OPENAI_API_KEY
- QDRANT_URL
- QDRANT_API_KEY
- DATABASE_URL
- SECRET_KEY