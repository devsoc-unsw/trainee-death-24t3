import "./App.css";
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from '@react-oauth/google';
import getAuth from '../hooks/getAuth'



function App() {

  return (
    <GoogleOAuthProvider clientId={"YOUR_CLIENT_ID"}>
      <GoogleLogin
        onSuccess={async (credentialResponse: CredentialResponse) => {
          try {
            const response = await getAuth(credentialResponse); 
            console.log("Server Response:", response);
          } catch (error) {
            console.error("Registration failed:", error);
          }
        }}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>
  );
}

export default App;