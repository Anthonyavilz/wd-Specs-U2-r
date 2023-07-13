import MovieCard from "./MovieCard";

const MovieScreen = ({movieList, watchList, page, setPage, addMovie, removeMovie}) => {

    const movieDisplay = movieList.map((movie, index) => {
        return (
            <MovieCard
                movie = {movie}
                watchList={watchList}
                addMovie = {addMovie}
                removeMovie={removeMovie}

            />
        )
    });

    // below with the functions, because we are setting up a new page and the url has part where it goes to another page
    // since we are updating/rendering a new page, we need to do the setPage cuz now we are changing the inital state.
    // This variable is available because we are passing it down from the app.js to this component.
    // The overall function below is just to change the page of information

    const decrement = () => {
        setPage(page - 1)
    }

    const increment = () => {
        setPage(page + 1)
    }
    
    return (
        <div className="page">
            <h1>Phillip's Movie Theatre</h1>
            <h3>Add a Movie to your Watchlist</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen
