import { ObjectId } from 'mongodb';

export interface UserToken {
    userId: string,
    email: string
}

export interface CalendarData {
    id: number,
    title: string,
    start: Date,
    end: Date
}

export interface CalendarList {
    calendarName: string,
    calendarId: string
}

export interface User{
    _id: ObjectId;
    userId: string;
    googleId: string,
    email: string,
    name: string,
    ical: string,
    calendarData: CalendarData[],
    calendars: CalendarList[],
    invites: CalendarList[]
};

export interface CalendarInfo {
    userList: UserList[];
    name: string;
    ical: string,
}

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