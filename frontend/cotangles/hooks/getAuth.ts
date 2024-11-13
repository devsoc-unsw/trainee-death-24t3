import axios from "axios"
import { CredentialResponse } from "@react-oauth/google";

const fetcher = (url: string, body: CredentialResponse) =>
    axios.post(url, body).then((res) => res.data);

// fetches backend route for frontend uses
async function useAuth(credentials: CredentialResponse) {
    console.log("anythinf");
   try { 
    const response = await fetcher(
      "http://localhost:3000/register", 
        credentials   
  );

  return {
      response,
  }}
  catch(error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

export default useAuth;
  
  