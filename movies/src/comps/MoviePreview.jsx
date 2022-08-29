import React from 'react'

const showMovie = (movie, deleteMovie, editMovie) => {

    return <div>
        <button onClick={() => editMovie(movie.id)}>Edit Movie</button>
        <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
        <h3>Movie Name: {movie.name}</h3>
        <h3>Release Year: {movie.year}</h3>
        <h3>Movie Director: {movie.director}</h3>
        <img src= {movie.imageUrl} alt=""/>      
    </div>
}

export { showMovie }