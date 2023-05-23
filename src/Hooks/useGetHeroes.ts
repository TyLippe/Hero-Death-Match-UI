import axios from "axios";

export const useGetHeroes = () => {
  const baseURL = "https://akabab.github.io/superhero-api/api";
  const apiURL = "http://localhost:3001/";

  const getHeroes = () => {
    return axios
      .get(`${baseURL}/all.json`)
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getWinner = ({ hero1, hero2 }: { hero1: string; hero2: string }) => {
    return axios
      .get(`${apiURL}`, {
        params: {
          hero1,
          hero2,
        },
      })
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return {
    getHeroes,
    getWinner,
  };
};
