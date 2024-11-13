import "./App.css";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { Button } from "./components/ui/button";
import { decodeJwt } from "jose";


function App() {
  return (
    <>
     <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          const payload = decodeJwt(credentialResponse!.credential ?? "");
          console.log(payload);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <Button
        onClick={() => googleLogout()}
      >
        logout
      </Button>
    </>
  );
}

export default App;
