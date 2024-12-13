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

export interface CalendarUserData {
    userId: string,
    name: string,
    calendarData: CalendarData[],
}

export interface CalendarInfo {
    calendarId: string,
    name: string,
    userList: UserList[],
    calendarUserData: CalendarUserData[]
}

export interface UserList {
    userId: string,
    color: string
}
