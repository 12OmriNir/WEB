import React, {Component} from "react";

class EditMovie extends Component {
    constructor(props) {
        super(props)
        if(props.movieToEdit){
            this.state = props.movieToEdit
        }
        else {
            this.state = {
                name: '',
                year: '',
                director: '',
                imageUrl: '',
            }
        }
    }

    handleChange = ({target}) => {
        this.setState((state) => {
            state[target.name] = target.value
            return state
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {isAddMode, addMovie, editMovie} = this.props

        if(isAddMode){
            addMovie(this.state)
        }else{
            editMovie(this.state)
        }
    
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state["name"]} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Year:
                    <input type="text" name="year" value={this.state["year"]} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Director:
                    <input type="text" name="director" value={this.state["director"]} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    imageUrl:
                    <input type="text" name="imageUrl" value={this.state["imageUrl"]} onChange={this.handleChange}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export {EditMovie}