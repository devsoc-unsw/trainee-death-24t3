import axios from "axios"
import { CredentialResponse } from "@react-oauth/google";
import { AxiosHeaders } from 'axios'

import { RawAxiosRequestHeaders} from "axios";

// set withCredentials option to true to get http only cookie
const fetcher = (url: string, data:  (RawAxiosRequestHeaders) | AxiosHeaders) =>
  axios.post(url, {}, {headers: data, withCredentials: true}).then((res) => res.data);

async function useAuth(credentials: CredentialResponse) {
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
  
  