const HOST = process.env.REACT_APP_MOVIEDB_API_HOST
const HEADERS = {
    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8"
}
const OPTIONS = {
    headers: HEADERS
}

export const getMovies = async () => {
    return fetch(`${HOST}/discover/movie`, OPTIONS)
}

export const getMovie = async ( movieId ) => {
    return fetch(`${HOST}/movie/${movieId}`, OPTIONS)
}

export const searchMovie = async (keyword) => {
    return fetch(`${HOST}/search/movie?query=${keyword}`, OPTIONS)
    .then((response) => response.json())
}

export const getVideosMovie = async (movieId) => {
    return fetch(`${HOST}/movie/${movieId}/videos`, OPTIONS)
}

export const getGenres = async () => {
    return fetch(`${HOST}/genre/movie/list`, OPTIONS)
    .then((response) => response.json())
}
