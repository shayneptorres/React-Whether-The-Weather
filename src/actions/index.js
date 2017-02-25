import axios from "axios";

const api_key = "49b879af39addd829f220b4f9a962df4"
const api_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    const url = `${api_url}&q=${city},us`;
    const request = axios.get(url);

    return {
        type:FETCH_WEATHER,
        payload: request
    }
}