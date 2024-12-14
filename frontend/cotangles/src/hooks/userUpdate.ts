import { API_URL } from "./helpers";
import axios from "axios";

const fetcher = (url: string) =>
    axios.get(url, {}).then((res) => res.data);
    
const userUpdate = () => {
    const response = fetcher(API_URL + "/user/update");
    return {
        response
    };
};
  
export default userUpdate;