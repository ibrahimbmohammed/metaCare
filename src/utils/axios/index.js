import axios from "axios";


  const baseURL = "https://swapi.dev/api/";

  
  const setHeader = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return config;
  };
  
  
  const getRequest = (url) => axios.get(`${baseURL}${url}`, setHeader());
  const getRequestNoBase = (url) => axios.get(`${url}`, setHeader());

export { getRequest, getRequestNoBase};
