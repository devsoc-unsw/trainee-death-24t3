import { ObjectId } from 'mongodb';

export interface User{
    _id: ObjectId;
    id: number,
    name: string,
    password: string,
    ical: string
    friends: string[]
};