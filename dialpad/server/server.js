// server/server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const twilio = require('twilio');

const AccessToken = twilio.jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;

const app = express();
const port = process.env.PORT || 3000;

// Use morgan to log incoming requests
app.use(morgan('dev'));

// Parse incoming POST data from Twilio
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint to generate a Twilio Access Token
app.get('/token', (req, res) => {
  console.log('GET /token requested');
  try {
    const voiceGrant = new VoiceGrant({
      outgoingApplicationSid: process.env.TWILIO_TWIML_APP_SID,
    });

    const token = new AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_API_SECRET,
      { identity: 'user_' + Math.random().toString(36).substr(2, 8) }
    );

    token.addGrant(voiceGrant);
    console.log('Token generated successfully');
    res.send({ token: token.toJwt() });
  } catch (err) {
    console.error('Error generating token:', err);
    res.status(500).send({ error: err.message });
  }
});

// Outbound voice endpoint for Twilio Client calls with valid callerId
app.post('/voice-outbound', (req, res) => {
  console.log('POST /voice-outbound requested with body:', req.body);
  
  // Retrieve the target number from the POST body; use default if not provided
  const targetNumber = req.body.number || '+19472822980';
  console.log('Dialing number:', targetNumber);

  // Use a valid callerId (must be a Twilio number or a verified outgoing caller ID)
  const callerId = process.env.VALID_CALLER_ID || '+12345678901'; // Replace with your valid number

  const twiml = new twilio.twiml.VoiceResponse();
  const dial = twiml.dial({ callerId: callerId });
  dial.number(targetNumber);

  console.log('Sending TwiML response:', twiml.toString());
  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
