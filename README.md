![silverline-logo-3](https://github.com/user-attachments/assets/1587964f-64ab-4143-a5d4-0a03913f6558)

# 🧓 Silverline – A Voice of Hope for the Elderly

**Silverline** is an AI-powered voice-to-voice assistant designed to help elderly individuals in moments of need—whether emotional, medical, environmental, or related to daily living.

> 📞 **Call Now**: +1 (947) 282-2980

> 🧪 **Try the Live Link**: [silverline-13-51-250-75.nip.io](https://silverline-13-51-250-75.nip.io)  

---

## 💡 The Problem

In regions like **Pakistan**, many elderly individuals—and even younger people in remote areas—lack access to or understanding of modern technology. In emergencies, app-based solutions and online tools are often out of reach. Emergency services can be unreliable or delayed. For these communities, a **simple phone call** can mean the difference between help and helplessness.

---

## ✨ The Silverline Solution

Silverline makes **accessing support as simple as dialing a number**—no internet, smartphone, or technical skills required.

✅ **No apps**  
✅ **No downloads**  
✅ **No typing**  
✅ **Just speak**

---

## 🗣️ What Makes Silverline Special?

### 🎙️ Real-Time Voice AI (Powered by OpenAI)

- Uses **OpenAI’s real-time API** for natural, two-way voice conversations.
- Preserves **tone, sentiment, and emotional nuance**—no loss through text conversion.
- Responds in a **soothing and empathetic voice** with 7 voice options (male and female).
- Built from scratch using **custom WebSocket handling**—**no external wrappers like Vapi used**.

---

### 🧩 Enhanced by AgentPro – Real-Time Knowledge Retrieval

Integrates [**AgentPro**](https://github.com/traversaal-ai/AgentPro)—a modular agent framework—to enable:

🔍 **Real-time internet search**, so the bot can assist with dynamic, location-specific queries such as:
- 📍 **Nearby hospitals or pharmacies**
- 🌤 **Weather and traffic updates**
- 📘 **Public service information or general queries**

By using AgentPro’s tool-calling capabilities, Silverline **overcomes model knowledge cutoffs** and provides **live, up-to-date information** from the web.

---

## 📊 Dashboard & Call Analytics

🔗 **Access Dashboard**: [silverline-13-51-250-75.nip.io/dashboard](https://silverline-13-51-250-75.nip.io/dashboard)

Track all interactions in real time:

| Caller Number | Twilio Number | Type | Duration | Time | Spam Status | Reason |
|---------------|---------------|------|----------|------|-------------|--------|

- Detects and blocks **spam calls**.
- Categorizes each interaction by **type** and **intent**.

---

## 🛠️ Backend Logging

🔗 **View Logs**: [silverline-13-51-250-75.nip.io/gen-log](https://silverline-13-51-250-75.nip.io/gen-log)

**Why are we showing logs?**  
Because everything powering Silverline is **custom-engineered**—especially the voice interface. Unlike plug-and-play wrappers (like Vapi), **Silverline handles OpenAI's real-time streaming API directly via WebSockets**.

The log viewer is designed to show **only AI Backend logs**, with the drop-down default set to "AI Backend" because the entire logic of real-time communication is handled there. Although other backend options are available as drop-down choices, they are not active, as the focus is demonstrating the AI handling of events.

These logs showcase:
- Event-driven handling of user voice input
- Orchestration of WebSocket messages
- Prompting, streaming, and robust edge-case recovery
- Asynchronous performance with detailed logging

It’s a demonstration of the benefits of building a deeply integrated voice intelligence system from the ground up.

---

## 📞 How to Test It

### 1. **Call Directly**
Use your phone and dial:  
📞 +1 (947) 282-2980

### 2. **Use the Web Dial Pad**  
🧪 [Try It Here](https://silverline-13-51-250-75.nip.io/dialer/)

No smartphone? No problem. Even basic feature phones work.

---

## 🧬 Tech Stack

- **Voice AI Model**: OpenAI GPT (Real-Time API)
- **Telephony**: Twilio
- **Agent Framework**: [AgentPro](https://github.com/traversaal-ai/AgentPro)
- **Frontend**: Next.js
- **Backend**: FastAPI (Async)
- **Logging**: Custom real-time log capture
- **Infrastructure**: Docker + Nginx + Async Workers

---

## 🧪 Run It Locally

### 🔻 Clone the Repository

```bash
git clone https://github.com/mubashirsidiki/Traversaal-x-Optimized-AI-Hackathon.git
cd Traversaal-x-Optimized-AI-Hackathon
```

---

### 🛠️ Set Up Environment Variables

#### 📂 In `/backend/.env`

```
# OpenAI API Key:
OPENAI_API_KEY=

# OpenAI Realtime Model:
OPENAI_REALTIME_MODEL=

# Backend URL:
backend_url=

# Classifier Model:
CLASSIFIER_MODEL=

# MongoDB Connection:
DATABASE_URL=

# Traversaal Ares API Key:
TRAVERSAAL_ARES_API_KEY=
```

#### 📂 In `/frontend/.env`

```
# API Configuration
API_PREFIX=/ai/api
API_TIMEOUT=90000

# URLs
BASE_URL=http://localhost:8000
DIALPAD_URL=http://localhost:3001/dialer
LOG_VIEWER_URL=http://localhost:3002/gen-log
```

#### 📂 In `/dialpad/.env`

```
# Twilio Configuration
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
VALID_CALLER_ID=
TWILIO_API_KEY=
TWILIO_API_SECRET=
TWILIO_TWIML_APP_SID=

# Server Configuration
PORT=3001
```

#### 📂 In `/general-logging/.env`

```
# API Endpoints
AI_BACKEND_API=http://localhost:8000/ai/server/send-logs
BACKEND_API=
FRONTEND_API=
```

---

### 🐳 Run with Docker (Recommended)

```bash
docker-compose up --build -d
```

To stop:

```bash
docker-compose down
```

---

### 🧰 Run Without Docker

#### 1. **Backend**

```bash
cd backend
poetry install
poetry run python main.py
```

#### 2. **Frontend**

```bash
cd ../frontend
npm install
npm run build
npm run dev
```

#### 3. **Dialpad**

```bash
cd ../dialpad
npm install
node server/server.js
```

#### 4. **General Logging**

```bash
cd ../general-logging
npm install
node server.js
```

---

## 🌐 Local Access URLs

After successful configuration and running the project locally, you can access:

- **Frontend** at: [http://localhost:3000](http://localhost:3000)
- **Backend** at: [http://localhost:8000](http://localhost:8000)
- **Dialer** at: [http://localhost:3001](http://localhost:3001)
- **Log Viewer** at: [http://localhost:3002](http://localhost:3002)

---

## 🌍 Vision

> “In a world driven by screens, Silverline gives hope through a voice.”

Silverline isn’t just a tech demo—it’s a mission to **make AI accessible, human, and life-saving** for those who need it most.

---
