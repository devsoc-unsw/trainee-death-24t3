import { API_URL } from "./helpers";
import axios from "axios";


const fetcher = (url: string) =>
  axios.get(url, {}).then((res) => res.data);

const getCalendarInfo = (calendarId: string) => {
    const response = fetcher(API_URL + "/calendar/info/" + calendarId);
 
    return {
        response
    };
};

export default getCalendarInfo;
  