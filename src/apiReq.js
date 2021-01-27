import axios from "axios";

export const getStadiums = () => {
  return axios
    .get("https://frozen-scrubland-34339.herokuapp.com/api/stadiums")
    .then((res) => {
      return res.data.stadiums;
    });
};

