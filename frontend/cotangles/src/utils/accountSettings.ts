import { CredentialResponse } from '@react-oauth/google';
import getAuth from '../hooks/getAuth';
import doLogout from '@/hooks/logout';
import Cookies from 'js-cookie';


export const logout = async () => {
    // Do backend stuff here to logout
    try {
        const response = await doLogout();
        console.log("Server Response:", response);
        Cookies.remove("userinfo")
        window.location.replace("../login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
}

export const login = async (credentialResponse: CredentialResponse) => {
    try {
        const response = await getAuth(credentialResponse);
        console.log("Server Response:", response);
    } catch (error) {
    console.error("Registration failed:", error);
    }
}