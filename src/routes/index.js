import {
    Routes,
    Route,
  } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

  export function RoutesCreate() {
    return (
        // <Router>
            <Routes>
                <Route path="/" element={ <HomePage />}></Route>
                <Route path="/movies" element={ <h1>Moviews</h1>}></Route>
                <Route path="/details" element={ <h1>Details</h1>}></Route>
                <Route path="*" element={ <NotFoundPage /> }></Route>
            </Routes>
        // </Router>
    )
  }