import "./App.css";
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from '@react-oauth/google';
import getAuth from '../hooks/getAuth'



function App() {
  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const response = await getAuth(credentialResponse);
      console.log("Server Response:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={"899796014325-caos2u0vn8g0qrij96kcpvdi4hifq18d.apps.googleusercontent.com"}>
     <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default App;