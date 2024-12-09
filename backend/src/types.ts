import { ObjectId } from 'mongodb';

export interface UserToken {
    userId: string,
    email: string
}

export interface CalendarList {
    calendarName: string,
    calendarId: string
}

export interface User{
    _id: ObjectId;
    googleId: string,
    email: string,
    name: string,
    ical: string,
    calendars: CalendarList[],
    invites: string[]
};

export interface UserList {
    userId: string,
    color: string
}

export interface Calendar {
    _id: ObjectId;
    calendarId: string;
    userList: UserList[];
    name: string;
}

