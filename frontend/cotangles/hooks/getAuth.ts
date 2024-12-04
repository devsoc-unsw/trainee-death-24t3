import axios from "axios"
import { CredentialResponse } from "@react-oauth/google";



const fetcher = (url: string, data: any) =>
  axios.post(url, {}, {headers: data}).then((res) => res.data);

async function useAuth(credentials: CredentialResponse) {
  console.log("anythinf");
  try {
    const response = await fetcher("http://localhost:3000/register", {
      credential: credentials.credential, 
    });

    return { response };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

export default useAuth;
  
  