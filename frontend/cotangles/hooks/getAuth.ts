import axios, { AxiosHeaderValue } from "axios"
import { CredentialResponse } from "@react-oauth/google";

// set withCredentials option to true to get http only cookie
const fetcher = (url: string, data: AxiosHeaderValue | undefined) =>
  axios.post(url, {}, {withCredentials: true, 
                       headers: {'Access-Control-Allow-Origin': '*', 
                                 'Content-Type': 'application/json', 
                                 credential: data}}).then((res) => res.data);

async function useAuth(credentials: CredentialResponse) {
  try {
    const response = await fetcher("http://localhost:3000/register", credentials.credential);

    return { response };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

export default useAuth;
  
  