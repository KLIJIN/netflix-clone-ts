export interface movieType {
  backdrop_path: string;
  first_air_date: string;
  genre_ids?: object;
  id: number;
  name: string;
  title?: string;
  original_name: string;
  origin_country?: object;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface movePrewiewType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
