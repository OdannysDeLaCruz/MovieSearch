// import styles from './assets/css/App.module.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import styled from 'styled-components'
import { MovieCarousel } from "./components/MovieCarousel";
import { NoFoundPage } from "./pages/NoFoundPage";

const Container = styled.div`
    padding: 16px;
    max-width: 1400px;
    margin: auto;
`

function App() {
    return (
        <Container>
            <Router> 
                <header className="movie__header">
                    <h1>Header</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                    </ul>
                </header>

                <Routes>
                    <Route path="/" element={ <MovieCarousel />}></Route>
                    <Route path="/movies" element={ <h1>MOviews</h1>}></Route>
                    <Route path="*" element={ <NoFoundPage /> }></Route>
                </Routes>

            </Router>

            
        </Container>
    );
}

export default App;
