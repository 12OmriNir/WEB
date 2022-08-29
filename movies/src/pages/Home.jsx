import React, {Component} from "react";
import { MovieList } from "../comps/MovieList";
import initialMovies from "../server/initialMovies";
import { EditMovie } from "../comps/EditMovie"
const {nanoid} = require('nanoid')

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: initialMovies,
            isAddMode: false,
            movieToEdit: undefined,
        }
    }

    onRemoveMovie(id) {
        this.setState((state) => {return {movies: state.movies.filter(movie => movie.id !== id)}})
    }

    onEditMovie(id) {
        this.setState((state) => {return {movieToEdit: state.movies.find(movie => movie.id === id)}})
    }

    onAddMovie() {
        this.setState({isAddMode: true})
    }

    onSearch() {
        
    }

    editMovie(updatedMovie){
        this.setState((state) => {
            return {
                movies: state.movies.map(movie => {
                    if(movie.id === updatedMovie.id){
                        movie = updatedMovie
                    }
                }),
                movieToEdit: undefined,
            }
        })
    }

    addMovie(newMovieProps){
        const movieToAdd = {
            id: nanoid(),
            name:newMovieProps.name,
            year: newMovieProps.year,
            director: newMovieProps.director,
            imageUrl: newMovieProps.imageUrl
        }

        this.setState((state) => {
            return {
                movies: [...state.movies, movieToAdd],
                isAddMode: false
            }
        })
    }

    render () {
         const {movies, isAddMode, movieToEdit} = this.state

         return <div>
            <h1>Movies App</h1>
            {!movieToEdit && !isAddMode ?
            (<MovieList
                onAddMovie={() => this.onAddMovie()}
                movies={movies}
                onRemoveMovie={(id) => this.onRemoveMovie(id)}
                onEditMovie={(id) => this.onEditMovie(id)}
                onSearch={this.onSearch}
            />) :
            (<EditMovie 
                movieToEdit = {movieToEdit}
                isAddMode = {isAddMode}
                addMovie = {(props) => this.addMovie(props)}
                editMovie = {(props) => this.editMovie(props)}
            />)
            }
         </div>
    }
}

export default Home;