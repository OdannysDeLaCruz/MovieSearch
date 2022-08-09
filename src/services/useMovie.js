export const getMovies = async () => {
    return fetch('https://api.themoviedb.org/3/discover/movie', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjdkMmU5NjI3ODY0ZTcyYjY5MmI1NDE5MDgyNTFjMiIsInN1YiI6IjYyZWM4NDY3MjczNjQ4MDA1YWMwNTg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ye-5J1gQfybqktiJmhy8FIkCAru54F5CTFfTOTgt6uI",
            "Content-Type": "application/json;charset=utf-8"
        }
    })
    .then(data => data.json())
}