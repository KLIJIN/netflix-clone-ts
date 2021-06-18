import { useState, useEffect, FC } from "react";
import Youtube, { Options } from "react-youtube";
import { movieType, movePrewiewType } from "../types";


const baseImgUrl = "https://image.tmdb.org/t/p/original";
const url = "https://api.themoviedb.org/3";


interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<movieType[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  // Options for react-youtube
  const opts: Options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },

  };


  const handleClick = async (movie: movieType): Promise<void> => {
    console.log("click")
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
      const body = await response.json();
      console.log("handleClick-2", body)
      setTrailerUrl(body.results[0]?.key);
    }
  };


  useEffect(() => {
    const fetchUrl_full = `${url}${fetchUrl}`;
    async function fetchData(): Promise<movePrewiewType[]> {
      const response = await fetch(fetchUrl_full);
      const body = await response.json();
      setMovies(body.results);
      return body.results
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return <img
            key={movie.id}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            src={`${baseImgUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie.name}
            onClick={handleClick.bind(this, movie)}
          />;
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
