import { useEffect, useState } from "react";
import { MovieCarousel } from "./MovieCarousel";
import { getMovies } from "../services/useMovie"

export function TheBestForYouCarousel() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
  
        getMovies()
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
            // console.log(movies) 
        })

    }, [])

    return (
        <>
            <MovieCarousel title="Lo mejor para tí" movies={ movies } />
        </>
    )
}