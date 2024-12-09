import { getData, setData } from './dbInterface.ts';
import { ObjectId } from 'mongodb';
import { Calendar } from './types.ts';


export async function createCalendar(userId: string, calendarName: string): Promise<boolean>{
    if (!userId || !calendarName) {
        console.error("bruh");
        return false; 
    }

    const newCalendar: Calendar = {
        _id: new ObjectId(),
        calendarId: generateRandomNumber(),
        userList: [],
        name: calendarName,
    };
    
    try {
        const existingCalendar = await getData('calendars', { name: calendarName });
        if (existingCalendar && existingCalendar.length > 0) {
            console.error("existing calendar");
            return false; 
        }

        newCalendar.userList.push(userId);

        const result = await setData('calendars', newCalendar); 
        console.log("new user registered", result);
        return true;
    } catch (error) {
        console.error("failed to register", error);
        return false;
    }
}

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000000); 
}
