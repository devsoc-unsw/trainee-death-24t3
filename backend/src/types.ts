import { ObjectId } from 'mongodb';

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

export interface Calendar {
    _id: ObjectId;
    calendarId: number;
    userList: string[];
    name: string;
}

