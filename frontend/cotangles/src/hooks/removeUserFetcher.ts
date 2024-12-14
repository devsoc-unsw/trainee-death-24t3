import axios from "axios";
import { API_URL } from "./helpers";


const fetcher = (url: string, payload: {calendarId: string, deleteUserId: string}) =>
    axios.delete(url, {
        data: payload, // Pass payload in the `data` field for DELETE requests
      }).then((res) => res.data);


function removeUserFetcher(calendarId: string, deleteUserId: string) {
    const payload = {calendarId: calendarId, deleteUserId: deleteUserId};
    const response = fetcher(API_URL + "/calendar/remove", payload);

    return {
        response
    };
}

export default removeUserFetcher;