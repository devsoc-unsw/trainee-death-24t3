import { fetcher, API_URL } from "./helpers";

async function removeUserFetcher(calendarId: string, deleteUserId: string) {
    try {
    const payload = { calendarId, deleteUserId };
      const response = await fetcher(API_URL + "/calendar/remove", "DELETE", null, payload);
      console.log("TEST", response);
      return { response };
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
}
  
export default removeUserFetcher;