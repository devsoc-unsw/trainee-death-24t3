import { getData, setData, updateUserCalendarList, calendarsCollection, usersCollection } from './dbInterface.ts';
import { ObjectId } from 'mongodb';
import { Calendar, UserList, CalendarList, CalendarInfo, User } from './types.ts';
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

        // calendar name already exists
        if (existingCalendar && existingCalendar.length > 0) {
            throw HTTPError(400, "Calendar name exists");
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
export async function calendarList(userId: string|undefined): Promise<CalendarList[]> {
    if (!userId) {
        throw HTTPError(403, "Unauthorized access");  
    }
    try {
        const exisitingUser = await getData("users", { _id: userId });
        // check if user exists
        if (!exisitingUser || exisitingUser.length == 0) {
            throw HTTPError(400, "Invalid request");
        }

        const user = exisitingUser[0];
        const calendarNames = user.calendars.map((calendar: CalendarList) => ({
            calendarName: calendar.calendarName,
            calendarId: calendar.calendarId,
        }));

        return calendarNames;
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}

/**
 * 
 * @param calendarId 
 */
export async function calendarInfo(calendarId: string|undefined): Promise<CalendarInfo[]> {
    if (!calendarId) {
        throw HTTPError(400, "Invalid request");
    }
    try {
        const existingCalendar = await getData('calendars', { calendarId: calendarId });
        // check if calendar exists
        if (!existingCalendar || existingCalendar.length == 0) {
            throw HTTPError(400, "Invalid request");
        }
        
        const calendarInfo = existingCalendar.map((calendar) => ({
            name: calendar.name,
            userList: calendar.userList,
            ical: calendar.ical
        }));

        return calendarInfo;
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

export async function removeUserFromCalendar(calendarId: string, deleteUserId: string) {
    if (!deleteUserId || !calendarId) {
        throw HTTPError(400, "Invalid request");
    }
    try {
        // Remove user from the calendar's user list
        const calendarUpdate = await calendarsCollection.updateOne(
            { calendarId },
            { $pull: { userList: { userId: deleteUserId } } }
        );

        // Remove calendar from the user's calendars list
        const userUpdate = await usersCollection.updateOne(
            { _id: new ObjectId(deleteUserId) },
            { $pull: { calendars: { calendarId } } }
        );

        return { calendarUpdate, userUpdate };
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}

export async function updateUser(userId: string, updates: { name?: string; ical?: string }) {
    const { name, ical } = updates;
    const updateFields: any = {};
    if (name !== undefined) {
        updateFields.name = name;
    }
    if (ical !== undefined) {
        updateFields.ical = ical;
    }

    try {
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(userId) },
            { $set: updateFields }
        );
        
        if (result.modifiedCount === 0) {
            throw HTTPError(400, "Bad request");
        }
        return result;
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}