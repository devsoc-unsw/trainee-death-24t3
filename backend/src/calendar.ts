import { getData, setData, updateUserCalendarList } from './dbInterface.ts';
import { ObjectId } from 'mongodb';
import { Calendar, UserList } from './types.ts';
import { generateId } from './utils.ts';
import HTTPError from 'http-errors';

/**
 * 
 * @param userId 
 * @param calendarName 
 * @returns 
 */
export async function createCalendar(userId: string | undefined, calendarName: string | undefined): Promise<string>{
    if (!userId) {
        throw HTTPError(403, "Unauthorized access");
    }

    if (!calendarName) {
        throw HTTPError(400, "Invalid calendar name");
    }

    if (!maxCalendarName(calendarName)) {
        throw HTTPError(400, "Invalid calendar name");
    }

    const newCalendar: Calendar = {
        _id: new ObjectId(),
        calendarId: generateId(),
        userList: [],
        name: calendarName,
    };
    
    try {
        const existingCalendar = await getData('calendars', { name: calendarName });
        console.log(existingCalendar);

        if (existingCalendar && existingCalendar.length > 0) {
            throw HTTPError(400, "Invalid calendar name");
        }

        const newUserList: UserList = {
            userId: userId,
            color: generateRandomColor()
        }

        newCalendar.userList.push(newUserList);
        // add this newly added calendar to user's calendar list
        await updateUserCalendarList(newCalendar.calendarId, userId);
        await setData('calendars', newCalendar); 

        return newCalendar.calendarId;
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}

/**
 * 
 * @param inviteEmail 
 * @param userId 
 * @param calendarId 
 */
export async function inviteCalendar(inviteEmail: string | undefined, userId: string | undefined, calendarId: string | undefined) {
    if (!userId) {
        throw HTTPError(403, "Unauthorized access");  
    }

    if (!inviteEmail || !calendarId) {
        throw HTTPError(400, "Invalid request");
    }

    try {
        const existingCalendar = await getData('calendars', { calendarId: calendarId });
        // check if calendar exists
        if (!existingCalendar || existingCalendar.length == 0) {
            throw HTTPError(400, "Invalid request");
        }
        
        await updateUserCalendarList(calendarId, userId);
        return calendarId;
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}

/**
 * 
 * @param userId 
 */
export async function calendarList(userId: string|undefined): Promise<string[]> {
    if (!userId) {
        throw HTTPError(403, "Unauthorized access");  
    }
    try {
        const existingCalendar = await getData('calendars', { userList: userId });
        // check if calendar exists
        if (!existingCalendar || existingCalendar.length == 0) {
            throw HTTPError(400, "Invalid request");
        }
        
        const calendarNames = existingCalendar.map(calendar => calendar.name);
        return calendarNames;
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}

function maxCalendarName(calendarName: string): boolean {
    if (calendarName.length > 20) {
        return false;
    }
    return true;
}

function generateRandomColor(): string {
    const colorList = ["#A7DBD8", "#BAFCA2", "#FFDB58", "#FFA07A", "#FFC0CB", "#C4A1FF"];
    const randomIndex = Math.floor(Math.random()) * (colorList.length - 1);

    return colorList[randomIndex];
}