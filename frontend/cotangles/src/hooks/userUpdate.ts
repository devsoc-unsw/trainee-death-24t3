import { API_URL } from "./helpers";
import axios from "axios";

const userUpdate = (updates: { name?: string; ical?: string }) => {
    const response = axios.put(API_URL + "/user/update", updates, { withCredentials: true })
      .then((res) => res.data);
  
    return {
      response
    };
};
  
export default userUpdate;