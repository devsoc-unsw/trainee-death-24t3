import { ObjectId } from 'mongodb';

export interface User{
    _id: ObjectId;
    googleId: string,
    email: string,
    name: string,
    password: string,
    ical: string
    friends: string[]
};

export interface googleUser{
    _id: ObjectId;
    googleId: string,
    email: string,
}