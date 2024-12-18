import { fetcher, API_URL } from "./helpers";

async function inviteCalendar(calendarId: string, inviteEmail: string) {
    try {
    const payload = { inviteEmail, calendarId };
      const response = await fetcher(API_URL + "/calendar/invite", "POST", null, payload);
      return { response };
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
}
  
export default inviteCalendar;