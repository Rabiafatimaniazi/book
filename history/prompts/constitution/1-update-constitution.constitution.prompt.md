---
id: 1
title: Update Constitution
stage: constitution
date: 2025-12-22
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Admin
command: sp.constitution
labels: [constitution, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

You are a senior product architect, AI systems designer, and educator.

Your task is to design and help build an AI-native, interactive textbook for
Physical AI & Humanoid Robotics, strictly following the constitution below.

========================
PROJECT CONSTITUTION
========================

Mission:
Build a fully AI-native, fast, simple, beautiful interactive textbook that teaches
Physical AI & Humanoid Robotics. It must feel like a real AI-powered educational
system — not a static book.

Core Product:
- Docusaurus-based interactive textbook
- 6–8 short, modern chapters
- Entire book readable in under 45 minutes
- Education-first, not engineering documentation

AI Features:
- RAG-powered chatbot
  - Answers ONLY from textbook content
  - Grounded, accurate, and cited responses
- Personalized explanations based on user background
- One-click Urdu translation for every chapter
- Auto-generated:
  - Chapter summaries
  - Quizzes
  - Learning boosters (key points, examples)

Platform & Stack:
Frontend:
- Docusaurus
- Deployed on Vercel
Backend:
- FastAPI
- Modular services and routes
- Deployed on Railway
Data:
- Neon (Postgres)
- Qdrant (Vector DB)
Auth:
- Better-Auth
Architecture:
- Clean, modular, scalable
- Folder structure:
  backend/
    website/
    rag/
    agents/

Constraints:
- Must work on free tiers (Neon, Qdrant)
- Demo-ready in 90 seconds
- Mobile-first, low-end device friendly
- Token usage controlled
- No heavy animations
- No long chapters
- No math-heavy derivations
- No robotics code
- No unnecessary dependencies

Success Criteria:
- Clean, modern UI
- Fast loading
- Accurate, grounded RAG answers
- Clear personalization impact
- High-quality Urdu translation
- All services deployed with live URLs
- 90-second demo recorded

User Priorities:
1. Smooth reading experience
2. Chatbot Q&A
3. Personalization
4. Urdu translation
5. Summaries and quizzes
6. Admin simplicity

========================
INSTRUCTIONS
========================

When responding:
- Be concise, structured, and implementat

## Response snapshot

# Physical AI & Humanoid Robotics Interactive Textbook Constitution

## Core Principles

### Education-First Design
Every feature and interaction must prioritize the learning experience over technical showcase. The textbook must be readable in under 45 minutes with 6-8 short, modern chapters. No math-heavy derivations or robotics code that distracts from core concepts.

### AI-Native Integration
The textbook leverages AI features as core functionality: RAG-powered chatbot that answers ONLY from textbook content with grounded, accurate, and cited responses. Personalized explanations adapt to user background knowledge.

### Accessibility & Localization
One-click Urdu translation for every chapter ensures global accessibility. Mobile-first design optimized for low-end devices. Fast loading times and minimal dependencies to ensure broad reach.

### Clean Architecture
Modular, scalable architecture with clear separation: Frontend (Docusaurus) on Vercel, Backend (FastAPI) on Railway, Data (Neon/Postgres and Qdrant vector DB). Folder structure follows: backend/website/, backend/rag/, backend/agents/.

### Resource Efficiency
Must work within free tier constraints (Neon, Qdrant). Token usage controlled. No heavy animations or unnecessary dependencies. Demo-ready in 90 seconds with clear success criteria.

### User Experience Priority
Smooth reading experience is paramount. Chatbot Q&A, personalization, Urdu translation, auto-generated summaries and quizzes, and admin simplicity are ranked in priority order to guide development decisions.

## Platform & Technology Constraints

### Stack Requirements
- Frontend: Docusaurus deployed on Vercel
- Backend: FastAPI with modular services and routes deployed on Railway
- Data: Neon (Postgres) and Qdrant (Vector DB)
- Authentication: Better-Auth
- Architecture: Clean, modular, scalable

### Performance Standards
- Mobile-first, low-end device friendly
- Fast loading times
- Token usage controlled
- Demo-ready in 90 seconds
- All services deployed with live URLs

## Development Workflow

### Implementation Guidelines
- Prefer smallest viable changes that meet education-first goals
- Maintain clean, modern UI that feels like a real AI-powered educational system
- Focus on accurate, grounded RAG answers with proper citations
- Implement clear personalization impact and high-quality Urdu translation
- Ensure all services are properly deployed with live URLs

### Quality Gates
- All features must enhance the smooth reading experience
- Chatbot responses must be grounded in textbook content only
- Personalization must have clear, measurable impact
- Translation functionality must be high-quality and accessible
- All deployments must have live, working URLs

## Governance

All implementations must align with the mission to build a fully AI-native, fast, simple, beautiful interactive textbook. Changes to core principles require explicit documentation of impact on user priorities and education-first goals. Architecture decisions must consider the 90-second demo requirement and free-tier constraints. The constitution serves as the authoritative guide for all technical and design decisions.

**Version**: 1.0.0 | **Ratified**: 2025-12-22 | **Last Amended**: 2025-12-22

## Outcome

- ✅ Impact: Created initial project constitution for Physical AI & Humanoid Robotics interactive textbook
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles
- 🔁 Next prompts: Continue with project setup and implementation
- 🧠 Reflection: Constitution successfully captures all key requirements and constraints from the user specifications

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin implementing the textbook structure based on the constitution