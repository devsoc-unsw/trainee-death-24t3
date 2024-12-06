import "../App.css";
import { CardTop, CardBody, CardHeader, CardAuth } from "@/components/ui/card";
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from '@react-oauth/google';
import getAuth from '../../hooks/getAuth';
import { Button } from "@/components/ui/button";

function Login() {
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
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>Register & Login</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBody
          className="bg-auth-decorator bg-contain bg-no-repeat bg-center"
          style={{ backgroundColor: "#fff8e1"}}
        >
          <CardAuth>
            <Button>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </Button>
          </CardAuth>
        </CardBody>
    </GoogleOAuthProvider>
  );
}

export default Login;
