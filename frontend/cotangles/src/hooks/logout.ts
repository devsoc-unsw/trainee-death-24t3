import { API_URL } from "./helpers";
import axios from "axios";

const fetcher = (url: string) =>
  axios.get(url, {}).then((res) => res.data);

const doLogout = async () => {
  try {
    const response = await fetcher(API_URL + "/auth/logout");
    return {response};
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

export default doLogout;
