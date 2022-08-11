import { Fragment, useEffect, useState } from "react"
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi"
import { InputSearch } from "../styled-components/Inputs"
import { Results, ResultsList, ResultsListItem, ResultsListItemImage } from "../styled-components/InputSearch"
import { searchMovie } from "../services/useMovie"
import { useNavigate } from "react-router-dom"

const InputSearchWrapper = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    rigth: 0;
    top: 80px;
    background: #000000;
    box-shadow: 0 0px 10px 0px #000000;
    color: #ffffff;
`

export function MovieSearch() {
    const [ isOpenInput, setIsOpenInput ] = useState(false)
    const [ search, setSearch ] = useState('')
    const [ foundMovies, setFoundMovies ] = useState([])

    const navigate = useNavigate();

    const handleOnChange = (event) => {
        setSearch(event.target.value)
    }

    const showDetailMovie = (id) => {
        console.log(id)
        setFoundMovies([])
        setIsOpenInput(false)
        navigate(`/movies/${id}`)
    }

    useEffect(() => {
        if ( search ) {
            searchMovie(search)
            .then((response) => setFoundMovies(response.results))
        } else {
            setFoundMovies([])
        }
    }, [search])

    return (
        <Fragment>
            <FiSearch style={{'fontSize': '24px'}} onClick={() => setIsOpenInput(!isOpenInput)} />
            { isOpenInput && <InputSearchWrapper>
                    <InputSearch type="text" placeholder="Buscar pelicula" onChange={ handleOnChange } /> 
                    { foundMovies.length ? 
                        <Results>
                            <ResultsList>
                                { foundMovies.map(movie => {
                                    return (
                                        <ResultsListItem onClick={ () => showDetailMovie(movie.id) }> 
                                            { movie.poster_path 
                                                ? <ResultsListItemImage src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } />
                                                : false
                                            }
                                            { movie.title } 
                                        </ResultsListItem>
                                    )
                                }) }
                            </ResultsList>
                        </Results>
                        : false
                    }
                </InputSearchWrapper>
            }
            
        </Fragment>
    )
}