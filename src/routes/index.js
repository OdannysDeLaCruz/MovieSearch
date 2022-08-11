import {
    Routes,
    Route,
  } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MovieDetailPage } from "../pages/MovieDetailPage";
import { NotFoundPage } from "../pages/NotFoundPage";

  export function RoutesCreate() {
    return (
        // <Router>
            <Routes>
                <Route path="/" element={ <HomePage />}></Route>
                <Route path="/movies/:movieId" element={ <MovieDetailPage /> }></Route>
                <Route path="*" element={ <NotFoundPage /> }></Route>
            </Routes>
        // </Router>
    )
  }