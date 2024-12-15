import { API_URL } from "./helpers";
import axios from "axios";


const fetcher = (url: string) =>
  axios.get(url, {}).then((res) => res.data);
  
const getInvitesList = () => {
    const response = fetcher(API_URL + "/calendar/invite/list");
    return {
        response
    };
};

export default getInvitesList;