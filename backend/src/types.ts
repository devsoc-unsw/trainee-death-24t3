import { ObjectId } from 'mongodb';

export interface User{
    _id: ObjectId;
    googleId: string,
    email: string,
    name: string,
    ical: string
    friends: string[]
};

export interface Calendar {
    _id: ObjectId;
    calendarId: string;
    userList: string[];
    name: string;
}

