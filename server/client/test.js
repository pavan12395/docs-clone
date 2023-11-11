const axios = require('axios');

// Replace with your server's URL
const serverUrl = 'http://localhost:5023';

// Test function for the /signUp endpoint
async function testSignUp() {
  try {
    const signUpRequest = {
      name: 'TestUser',
      password: 'TestPassword',
    };

    const response = await axios.post(`${serverUrl}/signUp`, signUpRequest);
    console.log('Sign-up response:', response.data);
  } catch (error) {
    console.error('Error testing /signUp endpoint:', error.message);
  }
}

// Test function for the /login endpoint
async function testLogin() {
  try {
    const loginRequest = {
      name: 'TestUser',
      password: 'TestPassword',
    };

    const response = await axios.get(`${serverUrl}/login`, { data: loginRequest });
    console.log('Login response:', response.data);
  } catch (error) {
    console.error('Error testing /login endpoint:', error.message);
  }
}

// Run the test functions
// testSignUp();
testLogin();
