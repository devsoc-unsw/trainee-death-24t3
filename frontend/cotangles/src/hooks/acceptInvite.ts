import { fetcher, API_URL } from "./helpers";

async function acceptInviteFetcher(userId: string, calendarId: string) {
    try {
    const payload = { userId, calendarId }
      const response = fetcher(API_URL + "/calendar/accept", "PUT", null, payload);
      console.log("TEST", response);
      return { response };
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
}
  
export default acceptInviteFetcher;