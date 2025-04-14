# Running the AI Backend for Telephonic-AI

Follow these steps to set up and run the AI backend:

## 1. Install Python
Make sure you have Python version `>=3.11,<3.12` installed.

## 2. Install Poetry
Poetry is used to manage project dependencies. Install it with:
```bash
pip install poetry
```

## 3. Set Up the Environment
Create an `.env` file in the project directory by copying the contents from [this spreadsheet](https://docs.google.com/spreadsheets/d/1cvzo5RCqxnK7Fqpum0yHA5LpuHwduYONFkdvuPAjBRk/edit?pli=1&gid=0).  
Update the values in the `.env` file as needed for your configuration.

## 4. Install Dependencies
Navigate to the project directory and install the required dependencies:
```bash
poetry install
```

## 5. Run the AI Backend
Start the backend by running:
```bash
poetry run python main.py
```
This will launch the server using **Uvicorn** on port 8000.

## 6. Access the WebSocket
Once the server is running, you can connect to the WebSocket at:
```
ws://localhost:8000/ai/openai/websocket/session
```
**Note**: To make a request, ensure you include `agent_id` and `access_token` in your connection payload.

---

The backend is now up and running, ready to handle WebSocket communication for your AI sessions.
