import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Movie = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MovieImage = styled.img`
    width: 100%;
    border-radius: 4px;
`

export const MovieCard = ({ movie }) => {
    const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <Movie>
            <Link to={`/movies/${movie.id}`}>
                <MovieImage src={ poster} alt={ movie.title } />
            </Link>
        </Movie>
    )
}