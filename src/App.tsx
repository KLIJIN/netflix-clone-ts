import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import requests from "./requests";

import Banner from "./Components/Banner";
import Row from "./Components/Row";
import Nav from "./Components/Nav";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Banner />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </Router>
  );
};

export default App;
