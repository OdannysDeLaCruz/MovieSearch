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

export const getGenres = async () => {
    return fetch(`${HOST}/genre/movie/list`, OPTIONS)
    .then((response) => response.json())
}