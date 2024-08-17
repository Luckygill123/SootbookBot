import * as constants from "../Constants/constant";
import axios from "axios";


export const IndustryList = () => {
    const {apiUrl, port} = constants;

    const IndustryListUrl = `${apiUrl}:${port}/api/admin/industry/list`
    return axios (IndustryListUrl, {
        method:"POST",
        headers: {
            "Content-Type" :"application/json",
            "x-via-device":true
        }
    })// Handle the response from backend here
    .then((res) => {
        return res.data
    })

    // Catch errors if any
    .catch((err) => {
        throw err
    });
}