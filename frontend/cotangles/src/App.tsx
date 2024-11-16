import "./App.css";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { Button } from "./components/ui/button";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  return (
    <>
     <GoogleLogin
        onSuccess={async credentialResponse => {
          console.log(credentialResponse.credential);
          setCookie('token', credentialResponse.credential, { path: '/', maxAge: 3600, secure: true });
          await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentialResponse),
          });
        }}
      />
      <Button
        onClick={() => {
          googleLogout()
          removeCookie('token', { path: '/' });
        }}
      >
        logout
      </Button>
    </>
  );
}

export default App;
