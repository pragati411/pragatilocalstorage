import { useState } from "react";
import InputBox from "./task-class/InputBox";

const movieItem = {
  padding: 12,
  margin: 12,
  border: "1px solid silver",
  backgroundColor: "#325795",
  color: "#fff",
};
const MoviesList = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const onMoviesSearch = (key, value) => {
    console.log({ key, value });
    setSearch(value);

    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((data) => data.json())
      .then((data) => setMovies(data.products));
  };
  return (
    <>
      <div style={{ padding: 12 }}>
        <InputBox
          value={search}
          onChange={onMoviesSearch}
          placeholder="Search your Movie over here!"
        />
        {search && <p>Searching for : {search}</p>}
      </div>
      <div>
        <h1>My Movies</h1>
        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id} style={movieItem}>
                <p>{item.title}</p>
                {/* <p>{item.description}</p> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MoviesList;
