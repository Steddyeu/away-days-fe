import axios from 'axios';

export const getStadiums = () => {
  return axios
    .get('https://frozen-scrubland-34339.herokuapp.com/api/stadiums')
    .then((res) => {
      return res.data.stadiums;
    });
};

export const getStadiumsByCountry = (country) => {
  return axios
    .get(
      `https://frozen-scrubland-34339.herokuapp.com/api/countries/${country}`
    )
    .then((res) => {
      console.log(res.data.stadiums);
      return res.data.stadiums;
    });
};

export const getStadiumById = (stadiumId) => {
  return axios
    .get(
      `https://frozen-scrubland-34339.herokuapp.com/api/stadiums/${stadiumId}`
    )
    .then((res) => {
      console.log(res.data);
      return res.data.stadium;
    });
};
