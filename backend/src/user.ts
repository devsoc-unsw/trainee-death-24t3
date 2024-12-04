import { getData, setData } from './dbInterface.ts';
import { ObjectId } from 'mongodb';
import { User } from './types.ts';

/*
export async function registerUserId(username: string, password: string, ical: string): Promise<boolean>{
    if (!username || !password || !ical) {
        console.error("bruh");
        return false; 
    }

    const newUser: User = {
        _id: new ObjectId(),
        id: generateRandomNumber(),
        name: username,
        password: password,
        ical: ical,
        friends: []
    };
    

    try {
        const existingUser = await getData('users', { name: username });
        if (existingUser && existingUser.length > 0) {
            console.error("existing user");
            return false; 
        }

        const result = await setData('users', newUser); 
        console.log("new user registered", result);
        return true;
    } catch (error) {
        console.error("failed to register", error);
        return false;
    }
}
*/

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000000); 
}
  
export function loginId(user: string, password: string) {
    return;
}
export function logoutId(user: string) {
    return;
}