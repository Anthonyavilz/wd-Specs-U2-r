// here the movie prop is being passed from movieScreen
// From movieScreen, the element from the map function is movie. The element(movie) is from the movie.com site
// Now it's being passed from one component to another (downward flow) to be used more indivually

// the movie.original_title is something from the api docs from the website that allow you to pull the movie title
// from the site

// When it says to destructure the prop inside MovieCard, it meant to go to this component and put in the props

const MovieCard = ({movie, watchList,addMovie, removeMovie}) => {

    const inWatchList = watchList.filter((mov) => {
        return mov.id === movie.id
    })

    const button = inWatchList.length === 0 ? 
    (<button onClick={() => addMovie(movie)}>Add to List</button>) 
    : 
    (<button onClick={() => removeMovie(movie)}>Remove</button>)
    // This button just conditionally renders what the button says whether or not it's in the watchlist or not

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
                <h3>
                    {movie.original_title}
                </h3>
            </div>
            {button}
        </div>
    )
}

export default MovieCard