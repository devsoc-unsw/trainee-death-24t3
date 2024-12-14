import { CredentialResponse } from '@react-oauth/google';
import getAuth from '../hooks/getAuth';
import doLogout from '@/hooks/logout';


export const logout = async () => {
    // Do backend stuff here to logout
    try {
        await doLogout();
        console.log("Logged out successfully");
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
    window.location.replace('../my-calendars')
}