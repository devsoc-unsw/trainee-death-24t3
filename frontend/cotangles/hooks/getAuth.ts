import axios from "axios"
import { CredentialResponse } from "@react-oauth/google";
import { AxiosHeaders } from 'axios'

import { RawAxiosRequestHeaders} from "axios";

const fetcher = (url: string, data:  (RawAxiosRequestHeaders) | AxiosHeaders) =>
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
  
  