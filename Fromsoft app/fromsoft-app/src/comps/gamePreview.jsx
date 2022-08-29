import React from "react";

showGame = ({name, date, bestBoss, rating}) => {
    return (
        <div>
            <h1>Game name: {name}</h1>
            <h2>Release date: {date}</h2>
            <h2>Best boss in the game: {bestBoss}</h2>
            <h2>Rating: {rating}/10</h2>
        </div>
    )
}

export {showGame}