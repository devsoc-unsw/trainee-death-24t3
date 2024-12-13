import { getData, setData, updateUserCalendarList, calendarsCollection, usersCollection } from './dbInterface.ts';
import { ObjectId } from 'mongodb';
import { Calendar, UserList, CalendarList, CalendarInfo, User, CalendarUserData } from './types.ts';
import { generateId } from './utils.ts';
import HTTPError from 'http-errors';
import { readIcalLink } from './icalReader.ts';

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
        const newUserList: UserList = {
            userId: userId,
            color: generateRandomColor()
        }

        newCalendar.userList.push(newUserList);
        await setData('calendars', newCalendar); 

        // add this newly added calendar to user's calendar list
        await updateUserCalendarList(newCalendar.calendarId, userId);

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
 * @param inviteEmail 
 * @param userId 
 * @param calendarId 
 */
export async function acceptCalendar(userId: string | undefined, calendarId: string | undefined) {
    if (!userId) {
        throw HTTPError(403, "Unauthorized access");  
    }

    if (!calendarId) {
        throw HTTPError(400, "Invalid request");
    }

    try {
        const existingUser = await getData("users", { userId: userId }) as User[];
        // check if user exists
        if (!existingUser || existingUser.length == 0) {
            throw HTTPError(400, "Invalid request");
        }
        const existingCalendar = await getData('calendars', { calendarId: calendarId }) as Calendar[];
        // check if calendar exists
        if (!existingCalendar || existingCalendar.length == 0) {
            throw HTTPError(400, "Invalid request");
        }
        const userExists = existingCalendar[0].userList.some(user => user.userId === userId);
        if (userExists) {
          throw HTTPError(400, "User already part of the calendar");
        }

        const color = generateRandomColor();

        // Add current user to calendar object userList
        await calendarsCollection.updateOne(
            { calendarId },
            { $push: { userList: { userId: existingUser[0].userId, color: color } } }
        );
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
        const exisitingUser = await getData("users", { userId: userId });
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
export async function calendarInfo(calendarId: string|undefined): Promise<CalendarInfo> {
    if (!calendarId) {
        throw HTTPError(400, "Invalid request");
    }
    try {
        const existingCalendar: Calendar[] = await getData('calendars', { calendarId: calendarId }) as Calendar[];

        // check if calendar exists
        if (!existingCalendar || existingCalendar.length == 0) {
            throw HTTPError(400, "Invalid request");
        }

        const calendarInfo = existingCalendar[0];
        const users = calendarInfo.userList;
        const calendarUserData: CalendarUserData[] = [];


        for (const user of users) {
            const calendarUsers: User[] = await getData("users", { userId: user.userId }) as User[];
            const calendarUser: User = calendarUsers[0];
            const userData: CalendarUserData = {
                userId: calendarUser.userId,
                name: calendarUser.name,
                calendarData: calendarUser.calendarData
            }
            calendarUserData.push(userData);
        }

        const calendarInfoRet: CalendarInfo = {
            calendarId: calendarId,
            name: calendarInfo.name,
            userList: calendarInfo.userList,
            calendarUserData: calendarUserData
        }

        console.log(calendarInfoRet);
        return calendarInfoRet;
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}

function maxCalendarName(calendarName: string): boolean {
    if (calendarName.length == 0 || calendarName.length > 20) {
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
            { userId: deleteUserId },
            { $pull: { calendars: { calendarId } } }
        );

        return { calendarUpdate, userUpdate };
    } catch (error) {
        throw HTTPError(400, "Bad request");
    }
}

export async function removeInvite(calendarId: string, userId: string) {
    if (!calendarId || !userId) {
        throw HTTPError(400, "Invalid request");
    }
    try {
        // Remove invite from the user's invite list
        const userUpdate = await usersCollection.updateOne(
            { userId: userId },
            { $pull: { invites: { calendarId } } }
        );
        return { userUpdate };
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
        readIcalLink(ical, (err, data) => {
            if (err) {
                console.error('Failed to read iCal link:', err);
            }
            else {
                updateFields.calendarData = data;
            }
        })
    }

    try {
        const result = await usersCollection.updateOne(
            { userId: userId },
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
