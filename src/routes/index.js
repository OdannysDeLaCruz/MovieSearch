import {
    Routes,
    Route,
  } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { NotFoundPage } from "../pages/NotFoundPage";

  export function RoutesCreate() {
    return (
        // <Router>
            <Routes>
                <Route path="/" element={ <HomePage />}></Route>
                <Route path="/movies/:movieId" element={ <MoviePage /> }></Route>
                <Route path="*" element={ <NotFoundPage /> }></Route>
            </Routes>
        // </Router>
    )
  }