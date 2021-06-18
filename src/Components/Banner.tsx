import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import requests from "../requests";
import { movieType } from "../types";

const Banner: React.FC = () => {
  const [movie, setMovie] = useState<movieType>();
  const style = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
  };

  // async function fetchData() {
  //   const response = await axios.get(requests.fetchNetflixOriginals);
  //   console.log("Banner fetchData", response.data);
  //   const { results } = response.data;
  //   console.log(results);
  //   // setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
  // }

  const fetchData2 = async (): Promise<movieType[]> => {
    const response = await fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
    // console.log("fetchData2 -->", response);
    const body = await response.json();
    //console.log("fetchData2 -->", body.results);
    setMovie(body.results[Math.floor(Math.random() * body.results.length)]);
    return body.results;
  };

  useEffect(() => {
    // fetchData();
    fetchData2();
  }, []);

  console.log("movie", movie);
  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
    //если текст больше определенного количества знаков, то он автоматически обрезается до нужной длинны.
  }

  return (
    <header className="banner" style={style}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List </button>
        </div>
        <h1 className="banner__description">
          {movie?.overview && truncate(movie.overview, 100)} {/* встроенная проверка на существование свойства, аналог записи выше */}
          {/* {truncate(movie?.overview, 100)} */}
        </h1>
        <div className="banner--fadeBottom"> </div>
      </div>
    </header>
  );
};
export default Banner;
