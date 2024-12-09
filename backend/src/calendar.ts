import { getData, setData } from './dbInterface.ts';
import { ObjectId } from 'mongodb';
import { Calendar } from './types.ts';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;


export async function createCalendar(token: string, calendarName: string): Promise<number>{
    if (!token|| !calendarName) {
        console.error("bruh");
        return -1; 
    }

    if (!maxCalendarName(calendarName)) {
        console.error('max');
        return -1;
    }
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    if (!decoded || !decoded.userId) {
        console.error("missing token");
        return -1;
    }

    const userId = decoded.userId;

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

function maxCalendarName(calendarName: string): boolean {
    if (calendarName.length > 20) {
        return false;
    }
    return true;
}

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000000); 
}
