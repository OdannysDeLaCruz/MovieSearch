import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LayoutContainer } from "../styled-components/Layouts"
import { ButtonPrincipal, ButtonSecondary } from "../styled-components/Buttons"
import { 
    MovieDetailWrapper, 
    MoviewBackdrop, 
    MoviewBackdropImage, 
    MovieSumamryWrapper, 
    MoviePoster, 
    MoviePosterImage, 
    MovieDetailTitle, 
    MovieGenres, 
    MovieSummary, 
    MovieOverview, 
    MovieOverviewTitle,
    MovieOverviewText 
} from "../styled-components/Movie"
import { getMovie } from "../services/useMovie"

export function MovieDetailPage () {
    const { movieId } = useParams()
    const [ movie, setMovie ] = useState(null)

    useEffect(() => {
        getMovie(movieId)
        .then( response => response.json() )
        .then( data => setMovie(data))
    }, [movieId])

    return (
        <div>
        { movie && 
            <MovieDetailWrapper>
                <MoviewBackdrop>
                    <MoviewBackdropImage src={ `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` } alt={ movie.title } />
                </MoviewBackdrop>

                <LayoutContainer>
                    <MovieSumamryWrapper>
                        <MoviePoster>
                            <MoviePosterImage src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={ movie.title } />
                        </MoviePoster>
                        <MovieSummary>
                            <MovieDetailTitle> { movie.title } </MovieDetailTitle>
                            <MovieGenres>
                                { 
                                    movie.genres.map((genre) => {
                                        return <ButtonSecondary key={ genre.id }>{ genre.name }</ButtonSecondary>
                                    })
                                }
                            </MovieGenres>

                            <MovieOverview>
                                <MovieOverviewTitle>Overview</MovieOverviewTitle>
                                <MovieOverviewText>{ movie.overview }</MovieOverviewText>
                            </MovieOverview>

                            <div>
                                <div>2h 43m</div>
                            </div>
                            <ButtonPrincipal>Play Trailer</ButtonPrincipal>
                            <div>
                                <button>Fiction</button>
                                <button>Fiction</button>
                                <button>Fiction</button>
                            </div>
                            
                        </MovieSummary>
                    </MovieSumamryWrapper>
                </LayoutContainer>
            </MovieDetailWrapper>
        }
        </div>
    )
}