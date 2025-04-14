// config.js - Centralized configuration with environment variable support

// Function to fetch and parse the .env file
async function loadEnvVariables() {
  try {
    const response = await fetch('.env');
    if (!response.ok) {
      throw new Error('Could not load .env file');
    }
    const envText = await response.text();
    
    // Parse the .env file content
    const envVars = {};
    envText.split('\n').forEach(line => {
      const line_trimmed = line.trim();
      if (line_trimmed && !line_trimmed.startsWith('#')) {
        const [key, value] = line_trimmed.split('=');
        if (key && value) {
          envVars[key.trim()] = value.trim();
        }
      }
    });
    
    return envVars;
  } catch (error) {
    console.error('Error loading environment variables:', error);
    // Return default values if .env file cannot be loaded
    return {
      AI_BACKEND_API: 'http://localhost:8000/ai/server/send-logs',
      BACKEND_API: 'http://localhost:8001/backend/send-logs', 
      FRONTEND_API: 'http://localhost:8002/frontend/send-logs'
    };
  }
}

// Initialize API endpoints
let API_ENDPOINTS = {
  "ai-backend": "",
  "backend": "",
  "frontend": ""
};

// Function to get meta tag content (keeping for backward compatibility)
function getMetaContent(name) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  return meta ? meta.content : "";
}

// Initialize configuration
async function initConfig() {
  const envVars = await loadEnvVariables();
  
  // Update API endpoints directly from env variables
  API_ENDPOINTS = {
    "ai-backend": envVars.AI_BACKEND_API,
    "backend": envVars.BACKEND_API,
    "frontend": envVars.FRONTEND_API
  };
  
  // Also update meta tags for compatibility with any code that might use them
  document.querySelector('meta[name="ai-backend-api"]').setAttribute('content', envVars.AI_BACKEND_API);
  document.querySelector('meta[name="backend-api"]').setAttribute('content', envVars.BACKEND_API);
  document.querySelector('meta[name="frontend-api"]').setAttribute('content', envVars.FRONTEND_API);
}

// Initialize config when the page loads
document.addEventListener('DOMContentLoaded', initConfig);
  