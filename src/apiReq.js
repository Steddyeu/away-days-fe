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
      return res.data.stadiums;
    });
};

export const getStadiumById = (stadiumId) => {
  return axios
    .get(
      `https://frozen-scrubland-34339.herokuapp.com/api/stadiums/${stadiumId}`
    )
    .then((res) => {
      return res.data.stadium;
    });
};


export const getPubs = (id) => {
  return axios
    .get(
      `https://frozen-scrubland-34339.herokuapp.com/api/pubs/${id}`
    )
    .then((res) => {
      return res.data.pubs;
    });
}


export const getCommentsById = (id) => {
  return axios
  .get(
    `https://frozen-scrubland-34339.herokuapp.com/api/stadiums/${id}/comments`
  )
  
  .then((res) => {
    return res.data.comments
  })
}

export const postComment = (comment, id) => {
  return axios.post(
    `https://frozen-scrubland-34339.herokuapp.com/api/stadiums/${id}/comments`, comment)
    .then((res) => {
      return res.data.newComment
    })
}