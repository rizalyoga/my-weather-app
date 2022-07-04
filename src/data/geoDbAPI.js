import axios from "axios";

export const GeoCitiesData = (citiesName) => {
  const config = {
    headers: {
      "X-RapidAPI-Key": "a8fed35980msh46844e41dce8d39p12da09jsn569dc8d5600b",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  axios
    .get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${citiesName}`, config)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a8fed35980msh46844e41dce8d39p12da09jsn569dc8d5600b", // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "e52d073c08f16ac84ffb933670753dce"; // enter your key from openweather API
