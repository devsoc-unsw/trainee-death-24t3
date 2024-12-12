import { CredentialResponse } from "@react-oauth/google";
import { fetcher, API_URL } from "./helpers";
                    
async function useAuth(credentials: CredentialResponse) {
  try {
    const response = await fetcher(API_URL + "/register", "POST", credentials.credential, {});
    return { response };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

export default useAuth;

  