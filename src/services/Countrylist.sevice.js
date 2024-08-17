import * as constants from "../Constants/constant";
import axios from "axios";


export const CountryList = () => {
    const {apiUrl, port} = constants;

    const CountryListUrl = `${apiUrl}:${port}/api/admin/country/list`
    return axios (CountryListUrl, {
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