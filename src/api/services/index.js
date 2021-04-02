import axios from "axios";

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8536eaeaf18c7ebde14ef1a0dea45068";

export const fetchWeather = async (cityName) => {

  try {
    const response = await axios.get(API_URL, {
      params: { q: cityName, appid: API_KEY, units: "metric" },
    });

    if (!response) {
      const msg = `Error Get Request, Status Code: ${response.status}`;
      throw msg;
    }

    const { data } = response;
    return data;
  } catch (error) {
    console.log("Network Error:", error);
    return false;
  }
};
