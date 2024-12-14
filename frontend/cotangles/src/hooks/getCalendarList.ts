import { API_URL } from "./helpers";
import axios from "axios";


const fetcher = (url: string) =>
  axios.get(url, {}).then((res) => res.data);
  
const getCalendarList = () => {
    const response = fetcher(API_URL + "/calendar/list");
    return {
        response
    };
};

export default getCalendarList;
  