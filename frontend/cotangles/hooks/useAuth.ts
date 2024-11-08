import axios from "axios"
import "./App.css";
import { CredentialResponse } from "@react-oauth/google";

const fetcher = (url: string, body: CredentialResponse) =>
    axios.post(url, body).then((res) => res.data);

// fetches backend route for frontend uses
function useAuth(credentials: CredentialResponse) {
    const response = fetcher(
      "http://localhost:3000/register", 
      credentials
  );

  return {
      response,
  };
}

export default useAuth;
  
  