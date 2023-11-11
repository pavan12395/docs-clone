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

async function testAddDoc() {
  try {
    const addDocRequest = {
      name: 'TestDoc',
      userName: 'TestUser',
      docData: 'TestDocumentContent',
    };

    const response = await axios.post(`${serverUrl}/addDoc`, { data: addDocRequest });
    console.log('AddDoc response:', response.data);
  } catch (error) {
    console.error('Error testing /addDoc endpoint:', error.message);
  }
}

async function testGetDoc() {
  try {
    const getDocRequest = {
      name: 'TestDoc', // Replace with a valid document name
    };

    const response = await axios.get(`${serverUrl}/getDoc`, { data: getDocRequest });
    console.log('GetDoc response:', response.data);
  } catch (error) {
    console.error('Error testing /getDoc endpoint:', error.message);
  }
}

async function testEditDoc() {
  try {
    const editDocRequest = {
      name: 'TestDoc', // Replace with a valid document name
      docData: 'Updated Document Content1', // Replace with the updated document data
    };

    const response = await axios.get(`${serverUrl}/editDoc`, { data: editDocRequest });
    console.log('EditDoc response:', response.data);
  } catch (error) {
    console.error('Error testing /editDoc endpoint:', error.message);
  }
}

// Run the test functions
// testSignUp();
// testLogin();
// testAddDoc();
testGetDoc();
// testEditDoc();