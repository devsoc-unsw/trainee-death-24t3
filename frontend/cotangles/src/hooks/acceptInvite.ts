import { fetcher, API_URL } from "./helpers";

async function acceptInviteFetcher(calendarId: string) {
    try {
    const payload = { calendarId }
      const response = await fetcher(API_URL + "/calendar/accept", "PUT", null, payload);
      return { response };
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
}
  
export default acceptInviteFetcher;