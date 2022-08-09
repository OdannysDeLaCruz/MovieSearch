import { useEffect, useState } from "react";
import { MovieCarousel } from "./MovieCarousel";
import { getMovies } from "../services/useMovie"

export function TheBestForYouCarousel() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
        .then(res => {
            setMovies(res.results)
        })
    }, [])

    return (
        <>
            <MovieCarousel title="Lo mejor para tí" movies={ movies } />
        </>
    )
}