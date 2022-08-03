import styled from 'styled-components'
import { MovieCard } from './MovieCard'

const MovieCarouselMain = styled.div`
    margin-bottom: 40px;
`

const MovieCarouselWapper = styled.div`
    display: flex;
    overflow: hidden;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`
    
const MovieSlider = styled.div`
    display: flex;

    > div {
        margin-right: 10px;
        display: inline-block;
    }
`

const MovieCarouselTitle = styled.h1`
    font-size: 20px;
    color: white;
    margin-bottom: 16px;
`

export function MovieCarousel() {
    return (
        <MovieCarouselMain>
            <MovieCarouselTitle>Recomendadas para tí </MovieCarouselTitle>
            <MovieCarouselWapper>
                <MovieSlider>
                    <MovieCard className="movie__slider-item" />
                    <MovieCard className="movie__slider-item" />
                    <MovieCard className="movie__slider-item" />
                    <MovieCard className="movie__slider-item" />
                    <MovieCard className="movie__slider-item" />
                    <MovieCard className="movie__slider-item" />
                    <MovieCard className="movie__slider-item" />
                    <MovieCard className="movie__slider-item" />
                </MovieSlider>
            </MovieCarouselWapper>
        </MovieCarouselMain>
    )
}