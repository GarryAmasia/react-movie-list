import axios from "axios";
// import Axios from "axios";
const api = "http://www.omdbapi.com/?apikey=2016dc0e&";

export const fetchMovie = (title) => {
  //call server
  //   const response = axios.get(api);
  //   console.log(response);
  return axios.get(api + "t=" + title);
};
