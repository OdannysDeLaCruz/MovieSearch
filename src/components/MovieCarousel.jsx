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
    padding-left: 16px;

    @media (min-width: 430px) {
        padding-left: 60px;
    }

    > div {
        margin-right: 10px;
        display: inline-block;
    }
`

const MovieCarouselTitle = styled.h1`
    font-size: 20px;
    color: white;
    margin-bottom: 16px;
    padding-left: 16px;

    @media (min-width: 430px) {
        padding-left: 60px;
    }
`

export function MovieCarousel({ title }) {
    return (
        <MovieCarouselMain>
            <MovieCarouselTitle> { title } </MovieCarouselTitle>
            <MovieCarouselWapper>
                <MovieSlider>
                    <MovieCard movie={{id: 1, image: '' }} className="movie__slider-item" />
                    <MovieCard movie={{id: 2, image: '' }} className="movie__slider-item" />
                    <MovieCard movie={{id: 3, image: '' }} className="movie__slider-item" />
                    <MovieCard movie={{id: 4, image: '' }} className="movie__slider-item" />
                    <MovieCard movie={{id: 5, image: '' }} className="movie__slider-item" />
                    <MovieCard movie={{id: 6, image: '' }} className="movie__slider-item" />
                    <MovieCard movie={{id: 7, image: '' }} className="movie__slider-item" />
                    <MovieCard movie={{id: 8, image: '' }} className="movie__slider-item" />
                </MovieSlider>
            </MovieCarouselWapper>
        </MovieCarouselMain>
    )
}