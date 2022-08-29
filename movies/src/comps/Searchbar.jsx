import React, {Component} from "react";

class Searchbar extends Component {

    render() {
        const {onSearch, onAddMovie} = this.props
        return(
            <div>
                <form>
                    <input type="text" onChange={onSearch}/>
                    <button onClick={onAddMovie}>+ Add Movie</button>
                </form>
            </div>
        );
    }
}

export default Searchbar;