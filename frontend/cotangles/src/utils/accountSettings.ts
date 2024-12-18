import { CredentialResponse } from '@react-oauth/google';
import getAuth from '../hooks/getAuth';
import doLogout from '@/hooks/logout';
import Cookies from 'js-cookie';


export const logout = async () => {
    // Do backend stuff here to logout
    try {
        await doLogout();
        Cookies.remove("userinfo")
        window.location.replace("../login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
}

export const login = async (credentialResponse: CredentialResponse) => {
    try {
      await getAuth(credentialResponse);
    } catch (error) {
      console.error("Registration failed:", error);
    }
}