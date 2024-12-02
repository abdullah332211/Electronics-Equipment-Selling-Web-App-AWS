const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

async function authenticateUser(username, password) {
  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: 'Cognito_App_Client_ID',
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    const result = await cognito.initiateAuth(params).promise();
    return result.AuthenticationResult;
  } catch (error) {
    throw new Error('Authentication failed');
  }
}
