import { getData, setData } from './dbInterface.ts';
import { ObjectId } from 'mongodb';
import { Calendar } from './types.ts';


export async function createCalendar(userId: string, calendarName: string): Promise<number>{
    if (!userId || !calendarName) {
        console.error("bruh");
        return -1; 
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
            return -1; 
        }

        newCalendar.userList.push(userId);

        const result = await setData('calendars', newCalendar); 
        console.log("new user registered", result);
        return newCalendar.calendarId;
    } catch (error) {
        console.error("failed to register", error);
        return -1;
    }
}

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000000); 
}
