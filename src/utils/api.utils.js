const MOVIE_GENRES_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=ad1a2a4cb80d72ec16fe712446738ea8`
export async function getMovieGenres() {
  return fetch(MOVIE_GENRES_API)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    }).catch(error => {
      return error
    })
}

const MOVIES_BY_GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=ad1a2a4cb80d72ec16fe712446738ea8&with_genres=`
export async function getMoviesByGenre(genre) {
  try {
    const movies = await (await fetch(`${MOVIES_BY_GENRE_API}${genre}`)).json()
    return movies
  } catch (error) {
    console.log(error)
  }
}

export async function getMovieDetails(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ad1a2a4cb80d72ec16fe712446738ea8&append_to_response=casts,videos,images,releases`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
    .catch(error => {
      console.log(error)
    })
}