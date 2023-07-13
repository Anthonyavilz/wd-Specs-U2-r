import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import MovieScreen from './Components/MovieScreen';
import WatchList from './Components/WatchList';

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)
  console.log(process.env.REACT_APP_API_KEY)
  const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}
  `

  const getData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.results)
        setMovieList(res.data.results)
      })
  }

  useEffect(() => {
    getData()
  }, [page])

  const addMovie = (movie) => {
    setWatchList([...watchList, movie])
  }

  const removeMovie = (movie) => {
    const newState = watchList.filter((mov) => {
      return mov !== movie
    })
    setWatchList(newState)
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen
          movieList = {movieList}
          watchList = {watchList}
          page = {page}
          setPage = {setPage}
          addMovie = {addMovie}
          removeMovie = {removeMovie}
        />
        <WatchList
          watchList = {watchList}
          removeMovie = {removeMovie}
        />
      </main>
    </div>
  );
}

export default App;
