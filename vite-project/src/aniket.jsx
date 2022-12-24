import { useEffect, useState } from "react";

const movieItem = {
  padding: 12,
  margin: 12,
  border: "1px solid silver",
  backgroundColor: "#325795",
  color: "#fff",
};

const ReactDebounceUWD = () => {
  const [search, setsearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      if (search) {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
          .then((data) => data.json())
          .then((data) => setMovies(data.products));
      }
    }, 2000);
    return () => clearTimeout(getData);
  }, [search]);
  return (
    <>
      <input
        type="text"
        placeholder=" Search Movies !!"
        onChange={(e) => setsearch(e.target.value)}
      />

      <div>
        <h1>My Movies</h1>
        {movies.map((item) => {
          return (
            <p style={movieItem} key={item.id}>
              {item.title}
            </p>

            //  <p key={item.id}>{search ? item.title && movieItem : null}</p>
          );
        })}
      </div>
    </>
  );
};
export default ReactDebounceUWD;
