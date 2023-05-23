import React, { useEffect, useState } from "react";
import { useGetHeroes } from "../../Hooks/useGetHeroes";

import "./home.scss";

export const Home = () => {
  const { getHeroes, getWinner } = useGetHeroes();
  const [heroes, setHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState({
    hero1: "",
    hero2: "",
  });
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeroes();
      setHeroes(data);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleOnChoice = (e: any) => {
    const { name, value } = e.target;
    setSelectedHeroes({ ...selectedHeroes, [name]: value });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const res = await getWinner(selectedHeroes);
    console.log({ res });
    setWinner(res);
  };

  return (
    <div className="home-container">
      <h1>Hero Death Match</h1>

      <form className="hero-form" onSubmit={handleOnSubmit}>
        <label>Hero #1</label>
        <select
          defaultValue=""
          name="hero1"
          id="hero-select"
          onChange={handleOnChoice}
        >
          {heroes?.map((hero) => (
            <option value={hero.name}>{hero.name}</option>
          ))}
        </select>

        <label>Hero #2</label>
        <select
          defaultValue=""
          name="hero2"
          id="hero-select"
          onChange={handleOnChoice}
        >
          {heroes?.map((hero) => (
            <option value={hero.name}>{hero.name}</option>
          ))}
        </select>

        <input
          type="submit"
          className="submit-btn"
          value="Find out their fate!"
        />
      </form>

      {winner && <h2>{winner}</h2>}
    </div>
  );
};
