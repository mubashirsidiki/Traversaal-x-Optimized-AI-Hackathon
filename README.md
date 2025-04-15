![silverline-logo-3](https://github.com/user-attachments/assets/1587964f-64ab-4143-a5d4-0a03913f6558)

# 🧓 Silverline – A Voice of Hope for the Elderly

**Silverline** is an AI-powered voice-to-voice assistant designed to help elderly individuals in moments of need—whether emotional, medical, environmental, or related to daily living.

> 📞 **Call Now**: +1 (947) 282-2980  
> 🧪 **Try the Web Dial Pad**: [silverline-13-51-250-75.nip.io/dialer](https://silverline-13-51-250-75.nip.io/dialer/)  
> 📊 **Call Analytics Dashboard**: [silverline-13-51-250-75.nip.io](https://silverline-13-51-250-75.nip.io)  
> 🛠️ **View Backend Logs**: [silverline-13-51-250-75.nip.io/gen-log](https://silverline-13-51-250-75.nip.io/gen-log/)

---

## 💡 The Problem

In regions like **Pakistan**, many elderly individuals—and even younger people in remote areas—lack access to or understanding of modern technology.

In emergencies, app-based solutions and online tools are often out of reach. Emergency services can be unreliable or delayed. For these communities, a **simple phone call** can mean the difference between help and helplessness.

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
- Designed specifically for **elderly comfort and simplicity**.

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

🔗 **Access Dashboard**: [silverline-13-51-250-75.nip.io](https://silverline-13-51-250-75.nip.io)

Track all interactions in real time:

| Caller Number | Twilio Number | Type | Duration | Time | Spam Status | Reason |
|---------------|----------------|------|----------|------|--------------|--------|

- Detects **spam calls**.
- Categorizes each interaction by **type**.

---

## 🛠️ Backend Logging

🔗 **View Logs**: [silverline-13-51-250-75.nip.io/gen-log](https://silverline-13-51-250-75.nip.io/gen-log)

Why are we showing logs?  
Because everything powering Silverline is **custom-engineered**—especially the voice interface. Unlike plug-and-play wrappers (like Vapi), **Silverline handles OpenAI's real-time streaming API directly via WebSockets**.

These logs showcase:
- Event-driven handling of user voice
- WebSocket message orchestration
- Prompting, streaming, and edge-case recovery
- Asynchronous performance with robust logging

It's a demonstration of what's possible when you go **beyond wrappers** and build deeply integrated voice intelligence.

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
- **Infra**: AWS + Docker + Nginx

---

## 🌍 Vision

> “In a world driven by screens, Silverline gives hope through a voice.”

Silverline isn’t just a tech demo—it’s a mission to **make AI accessible, human, and life-saving** for those who need it most.

---
