import MovieCard from "./MovieCard"

const WatchList = ({watchList, removeMovie}) => {

    // here, the overall variable is movie, so in the instructions it say to map over the watchlist and when it said to 
    // return a MovieCard, we had to import MovieCard and then with the map function, we still reference movie because
    // that's the variable we are accessing across everything. Just like with everything before, the movie prop is passed down
    // to the other things. This WatchList component is just like MovieScreen in the sense of level.
    // MovieCard is below both MovieScreen and WatchList so we pass down the movie to the card
    const movieDisplay = watchList.map((movie, index) => {
        return (
            <MovieCard
                movie={movie}
                watchList={watchList}
                removeMovie={removeMovie}

            />
        )
    })

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default WatchList