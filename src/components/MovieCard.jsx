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
// const MovieTile = styled.span`
//     font-size: 15px;
//     color: white;
//     text-align: center;
//     margin-top: 16px;
// `
export const MovieCard = () => {
    return (
        <Movie>
            <Link to={'/movies'}>
                <MovieImage src={ image } alt="" />
                {/* <MovieTile> Movie Title</MovieTile> */}
            </Link>
        </Movie>
    )
}