export const logout = () => {
    // Do backend stuff here to logout
    console.log("logged out")
    window.location.replace('../login')
}

export const login = () => {
    console.log("logging in")
    window.location.replace('../my-calendars')
}