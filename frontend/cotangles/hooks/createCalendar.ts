import { fetcher, API_URL } from "./helpers";

async function createCalendar(calendarName: string) {
  try {
    const payload = {calendarName: calendarName};
    const response = await fetcher(API_URL + "/calendar/new", "POST", null, payload);
    return { response };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

export default createCalendar;

  