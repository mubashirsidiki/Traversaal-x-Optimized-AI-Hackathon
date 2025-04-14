# FastStart Log Viewer Frontend

A web-based frontend for viewing logs from multiple sources (AI-Backend, Backend, Frontend), built as part of the [FastStart - A FastAPI Starter Kit](https://github.com/Hoopoes/FastStart). Proudly brought to you by **Hoopoes 🐦** – an open-source community fostering collaboration and innovation in software development.

## FastStart: A FastAPI Starter Kit

FastStart is a modular, flexible base for building backend microservices with FastAPI.

**Get Started:**
```bash
git clone --single-branch -b base https://github.com/Hoopoes/FastStart.git
```

## Hoopoes 🐦

**Hoopoes** is an open-source community from passionate coders like you.   
- **GitHub Organization:** [company/hoopoes-opensource](https://github.com/company/hoopoes-opensource)  

## Project Structure

- **index.html:** Main HTML file with meta tags for API endpoints (populated via environment variables).
- **config.js:** Reads API endpoint values from meta tags.
- **script.js:** Frontend logic for fetching logs (including date transformation, dynamic API selection, caching avoidance, loader display, and filtering).
- **style.css:** Custom CSS styling (TailwindCSS handles most styling).

## Environment Variables

API endpoints are injected via meta tags in **index.html**. Example variables in your `.env` file:

```env
AI_BACKEND_API=http://localhost:8000/ai/server/send-logs
BACKEND_API=http://localhost:8001/backend/send-logs
FRONTEND_API=http://localhost:8002/frontend/send-logs
```

These values can be injected using your build tool (Webpack/Vite with dotenv plugins) or through server-side rendering (e.g., Express with EJS).

## How to Run

1. Place all files in one folder.
2. Configure your environment injection so that the meta tags in **index.html** are populated with the correct API URLs.
3. Open **index.html** in your browser.
4. Use the date picker and dropdown to choose a date and log category, then click **Fetch Logs**.  
   - The button is disabled during the request, and a loader overlay is displayed.
5. Fetched logs will be rendered in the table below.

Enjoy using the FastStart Log Viewer Frontend and join Hoopoes in creating impactful open-source projects!
