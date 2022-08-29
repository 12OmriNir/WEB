import React, {Component} from "react";
import { showMovie } from "./MoviePreview";
import Searchbar from "./Searchbar";

class MovieList extends Component {

    render() {
        const {onSearch, onAddMovie, movies, onEditMovie, onRemoveMovie} = this.props

        return (
            <section>
                <Searchbar onSearch={onSearch} onAddMovie = {onAddMovie}/>
                <ul>
                    {movies.map(movie => <div key={movie.id}>
                        {showMovie(movie,onRemoveMovie, onEditMovie)}
                    </div>)}
                </ul>
            </section>
        )
    }
}

export {MovieList}