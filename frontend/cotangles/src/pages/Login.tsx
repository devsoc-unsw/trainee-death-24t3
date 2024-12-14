import "../App.css";
import { CardTop, CardBody, CardHeader, CardAuth } from "@/components/ui/card";
import { GoogleLogin, GoogleOAuthProvider, CredentialResponse } from '@react-oauth/google';
import getAuth from '../hooks/getAuth';
import sparkle from "@/assets/svg/sparkle.svg";
import squiggle_arrow from "@/assets/svg/squiggle_arrow.svg"

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
            <h1 className="text-center">Collaborative calendar management made <b>simple</b>.</h1>
            <p>See all your calendars in <b>one place</b>.</p>
            <p>Join your friends with <b>one click</b>.</p>
            <p>It's as easy as logging in with Google.</p>
            <div className="flex justify-center items-center h-[20%]">
              <img src={squiggle_arrow} className="scale-50" alt="squiggly arrow"/>
              <GoogleLogin
                theme="outline"
                width="200"
                shape="pill"
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              <img src={sparkle} className="scale-50 mb-10" alt="sparkle"/>
            </div>
          </CardAuth>
        </CardBody>
    </GoogleOAuthProvider>
  );
}

export default Login;