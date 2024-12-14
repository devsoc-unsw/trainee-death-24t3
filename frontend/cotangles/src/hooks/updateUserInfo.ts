import axios from "axios";
import { API_URL } from "./helpers";

const fetcher = (url: string, payload: {name: string | null, ical: string | null}) =>
  axios.put(url, payload).then((res) => res.data);

function updateUserInfo(userName: string | null, ical: string | null) {
  const payload = {name: userName, ical: ical};
  const response = fetcher(API_URL + "/user/update", payload);

  return {
    response
  };
}

export default updateUserInfo;

  