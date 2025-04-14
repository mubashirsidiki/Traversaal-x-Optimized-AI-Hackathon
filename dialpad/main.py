import os
import logging
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, Response, FileResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import VoiceGrant
from twilio.twiml.voice_response import VoiceResponse

# Load environment variables from .env file
load_dotenv()

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Read environment variables
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_API_KEY = os.getenv("TWILIO_API_KEY")
TWILIO_API_SECRET = os.getenv("TWILIO_API_SECRET")
TWILIO_TWIML_APP_SID = os.getenv("TWILIO_TWIML_APP_SID")
VALID_CALLER_ID = os.getenv("VALID_CALLER_ID", "+12345678901")

app = FastAPI()

# Define an endpoint to serve the index.html at root "/"
@app.get("/")
async def root():
    return FileResponse("public/index.html")

# Mount static files (CSS, JS, images) on /static
app.mount("/static", StaticFiles(directory="public"), name="static")

@app.get("/token")
async def get_token():
    logger.info("GET /token requested")
    try:
        # Create a Voice grant for the outgoing call (Twilio Client)
        voice_grant = VoiceGrant(outgoing_application_sid=TWILIO_TWIML_APP_SID)

        # Generate a token with a random identity
        token = AccessToken(
            TWILIO_ACCOUNT_SID,
            TWILIO_API_KEY,
            TWILIO_API_SECRET,
            identity="user_" + os.urandom(4).hex()
        )
        token.add_grant(voice_grant)

        # Get the JWT token, and handle bytes/str return type
        jwt_token = token.to_jwt()
        if isinstance(jwt_token, bytes):
            jwt_token = jwt_token.decode("utf-8")

        logger.info("Token generated successfully")
        return JSONResponse(content={"token": jwt_token})
    except Exception as e:
        logger.error("Error generating token: %s", e)
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.post("/voice-outbound")
async def voice_outbound(request: Request):
    # Parse incoming form data (Twilio sends POST as form data)
    form_data = await request.form()
    logger.info("POST /voice-outbound requested with body: %s", form_data)
    
    # Retrieve the target number from the form data; default if not provided
    target_number = form_data.get("number", "+19472822980")
    logger.info("Dialing number: %s", target_number)

    # Create a TwiML response with a valid callerId
    response = VoiceResponse()
    dial = response.dial(callerId=VALID_CALLER_ID)
    dial.number(target_number)
    twiml_str = str(response)
    logger.info("Sending TwiML response: %s", twiml_str)

    return Response(content=twiml_str, media_type="text/xml")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.getenv("PORT", 3000)), reload=True)


# uvicorn main:app --reload