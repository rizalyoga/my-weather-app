import axios from "axios";

export const GeoCitiesData = (citiesName) => {
  const config = {
    headers: {
      "X-RapidAPI-Key": "a8fed35980msh46844e41dce8d39p12da09jsn569dc8d5600b",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
    params: {
      minPopulation: "1000000",
      namePrefix: `${citiesName}`,
    },
  };

  axios
    .get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", config)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
