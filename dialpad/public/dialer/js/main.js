// public/js/main.js
let device;

function updateStatus(message) {
  document.getElementById('status').innerText = message;
  console.log('Status:', message);
}

function setupTwilioDevice(token) {
  console.log('Setting up Twilio Device with token:', token);
  device = new Twilio.Device(token, {
    codecPreferences: ['opus', 'pcmu'],
    fakeLocalDTMF: true,
    enableRingingState: true
  });

  device.on('ready', () => {
    updateStatus('Ready to make calls');
    console.log('Twilio Device is ready');
  });
  device.on('error', (error) => {
    updateStatus('Error: ' + error.message);
    console.error('Twilio Device Error:', error);
  });
  device.on('connect', () => {
    updateStatus('Call in progress...');
    console.log('Call connected');
    document.getElementById('callButton').disabled = true;
    document.getElementById('hangupButton').disabled = false;
  });
  device.on('disconnect', () => {
    updateStatus('Call ended.');
    console.log('Call disconnected');
    document.getElementById('callButton').disabled = false;
    document.getElementById('hangupButton').disabled = true;
  });
}

function fetchToken() {
  console.log('Fetching token...');
  fetch('/dialpad/token')
    .then(response => response.json())
    .then(data => {
      console.log('Token received:', data.token);
      setupTwilioDevice(data.token);
    })
    .catch(error => {
      updateStatus('Could not get a token from server.');
      console.error('Error fetching token:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, fetching token...');
  fetchToken();

  // Add click listeners to keypad digits to append to phone input
  const digitButtons = document.querySelectorAll('.digit');
  digitButtons.forEach(button => {
    button.addEventListener('click', () => {
      const phoneInput = document.getElementById('phoneNumber');
      phoneInput.value += button.innerText;
      console.log('Keypad button pressed:', button.innerText, 'New number:', phoneInput.value);
    });
  });

  // When the Call button is clicked, connect via Twilio
  document.getElementById('callButton').addEventListener('click', () => {
    const phoneNumber = document.getElementById('phoneNumber').value;
    console.log('Call button clicked, number:', phoneNumber);
    if (device) {
      // Pass the target number to your TwiML endpoint
      device.connect({ number: phoneNumber });
      updateStatus('Calling ' + phoneNumber + '...');
    } else {
      console.error('Twilio Device not ready');
    }
  });

  // When the Hang Up button is clicked, disconnect the call
  document.getElementById('hangupButton').addEventListener('click', () => {
    console.log('Hang Up button clicked');
    if (device) {
      device.disconnectAll();
      updateStatus('Call ended.');
    }
  });
});
