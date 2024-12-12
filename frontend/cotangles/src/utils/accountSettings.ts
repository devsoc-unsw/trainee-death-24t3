import { CredentialResponse } from '@react-oauth/google';
import getAuth from '../../hooks/getAuth';


export const logout = () => {
    // Do backend stuff here to logout
    console.log("logged out")
    window.location.replace('../login')
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