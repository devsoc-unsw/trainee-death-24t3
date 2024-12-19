import { API_URL } from "./helpers";
import axios from "axios";


const fetcher = (url: string) =>
  axios.get(url, {withCredentials: true, 
                  headers: {'Access-Control-Allow-Origin': '*', 
                            'Content-Type': 'application/json', 
                          }}).then((res) => res.data);
  
const getCalendarList = () => {
    const response = fetcher(API_URL + "/calendar/list");
    return {
        response
    };
};

export default getCalendarList;
  