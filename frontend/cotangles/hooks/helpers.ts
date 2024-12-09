import axios, { AxiosHeaderValue } from "axios"
import { url } from "inspector";

axios.defaults.withCredentials = true;

export const API_URL = "http://localhost:3000";


// TODO: check if this works for get, delete, put
/**
 * 
 * @param url string: API url to fetch
 * @param method string: GET, POST, DELETE, PUT
 * @param header object: Header payload
 * @param body object: Body payload
 */
export const fetcher = (url: string, method: string, header: AxiosHeaderValue | undefined, body: object) => {
    if (method === "POST") {
        axios.post(url, body, {withCredentials: true, 
            headers: {'Access-Control-Allow-Origin': '*', 
                      'Content-Type': 'application/json', 
                      credential: header}}).then((res) => res.data);
    }
    else if (method === "GET") {
        axios.get(url, {withCredentials: true, 
            headers: {'Access-Control-Allow-Origin': '*', 
                      'Content-Type': 'application/json', 
                      credential: header}}).then((res) => res.data);
    }
    else if (method === "DELETE") {
        axios.delete(url, {withCredentials: true, 
            headers: {'Access-Control-Allow-Origin': '*', 
                      'Content-Type': 'application/json', 
                      credential: header}}).then((res) => res.data);
    }
    else if (method === "PUT") {
        axios.put(url, body, {withCredentials: true, 
            headers: {'Access-Control-Allow-Origin': '*', 
                      'Content-Type': 'application/json', 
                      credential: header}}).then((res) => res.data)
    }
}

