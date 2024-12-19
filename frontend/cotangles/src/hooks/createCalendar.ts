import axios from "axios";
import { API_URL } from "./helpers";

const fetcher = (url: string, payload: {calendarName: string}) =>
  axios.post(url, payload, {withCredentials: true, 
    headers: {'Access-Control-Allow-Origin': '*', 
              'Content-Type': 'application/json'}}).then((res) => res.data);

function createCalendar(calendarName: string) {
  const payload = {calendarName: calendarName};
  const response = fetcher(API_URL + "/calendar/new", payload);

  return {
    response
  };
}

export default createCalendar;

  