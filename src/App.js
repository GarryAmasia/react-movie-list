import { Container } from "react-bootstrap";
import "./App.css";

import { CustomCard } from "./components/card/CustomCard";
import { MovieList } from "./components/movie-list/MovieList";
import { SearchForm } from "./components/search-form/SearchForm";
import { Title } from "./components/title/Title";
import { fetchMovie } from "./helper/axiosHelper";
import { useState, useEffect } from "react";
import { randomChar } from "./helper/randomGenerator";

function App() {
  const [searchedMovie, setSearchMovie] = useState({});
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    //create random character
    console.log("use effect executed");
    const char = randomChar();
    getMovie(char);
  }, []);

  console.log("loading html");

  const getMovie = async (search) => {
    // this "data" word is from object property from the axios
    const { data } = await fetchMovie(search);
    // console.log(data);
    setSearchMovie(data);
  };
  // console.log(searchedMovie);

  const addToMovieList = (type) => {
    setMovieList([...movieList, { ...searchedMovie, category: type }]);
    setSearchMovie({});
  };
  console.log(searchedMovie, movieList);

  const deleteMovie = (imdbID) => {
    if (window.confirm("are you sure ,you want to delete this movie?")) {
      const filteredMovieList = movieList.filter(
        (movie) => movie.imdbID !== imdbID
      );
      setMovieList(filteredMovieList);
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />
        {searchedMovie?.imdbID && (
          <CustomCard movieObj={searchedMovie} func={addToMovieList} />
        )}
        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;

// 1. create array of movies state in App.js
// 2. create a function that receive the movie and add to the collection list #1
// 3. pass the function #2 down to the custom card  component and receive as props
// 4. invoke the function #3 and trigger on button click and pass parameter either happy or lazy
// 5. #2 function will receive the argument happy or lazy and add, now add that(happy or lazy) to the obj as new property(category)
// 6. push the obj to the collection, #1

//7. create a component that will list the movies, and make reuse the custom card to show the movie in the list section
