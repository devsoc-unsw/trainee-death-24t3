import { v4 as uuidv4 } from 'uuid';
import { UserToken } from './types.ts'
import { jwtDecode } from "jwt-decode";


export const generateId = (): string => uuidv4();

export const verifySessionToken = (token: string | undefined): UserToken | null => {
    if (!token) {
        return null;
    }
    const tokenDecoded: any = jwtDecode(token);
    const userToken: UserToken = {
        userId: tokenDecoded.userId,
        email: tokenDecoded.email
    }    

    return userToken;
}