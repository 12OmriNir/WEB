import React, {Component} from "react";
import { showGame } from '../comps/gamePreview.jsx'
import { games } from "../services/games.js";

class MainPage extends Component {
    state = {
        games: []
    }

    render () {
        return(
            <h1>All The souls games I played!!!</h1>
            games.map(games => )
        )
    }
}

export default MainPage;