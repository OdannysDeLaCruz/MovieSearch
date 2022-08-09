import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../assets/images/image.png'

const Movie = styled.div`
    width: 240px;
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
    return (
        <Movie>
            <Link to={`/movies/${movie.id}`}>
                <MovieImage src={ image } alt="" />
            </Link>
        </Movie>
    )
}