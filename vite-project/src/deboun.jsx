import { debounce } from "lodash";
import { useEffect, useState } from "react";
import InputBox from "../LifeCycle/Input";
import { DebounceInput } from "react-debounce-input";

const Debounce = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("I am rendering for the first time");
    fetch(`https://dummyjson.com/products/search?q=phone`)
      .then((data) => data.json())
      .then((data) => setMovies(data.products));
  }, []);

  /*
  
  const onMoviesSearch = debounce(( value) => {
    
    setSearch(value);

    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((data) => data.json())
      .then((data) => setMovies(data.products));
  },500);

*/
  useEffect(() => {
    const getData = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((data) => data.json())
        .then((data) => setMovies(data.products));
    }, 2000);

    return () => clearTimeout(getData);
  }, [search]);

  //   const onMoviesSearch=(value) => {

  //     setSearch(value);

  //     fetch(`https://dummyjson.com/products/search?q=${value}`)
  //       .then((data) => data.json())
  //       .then((data) => setMovies(data.products));
  //       console.log("hey");
  //   }

  return (
    <>
      <div style={{ padding: 12 }}>
        {/* <InputBox
          value={search}
          onChange={onMoviesSearch}
          placeholder="Search your Movie over here!"
        /> */}
        {/* 
        // <DebounceInput
        //   minLength={3}
        //   debounceTimeout={2000}
        //   onChange={(event) =>{onMoviesSearch(event.target.value)}} /> */}
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>

        {search && <p>Searching for : {search}</p>}
      </div>
      <div>
        <h1>My Movies</h1>
        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Debounce;

/*


>>Debouncing using useEffect

React.useEffect(() => {
    const getData = setTimeout(() => {
      axios
      .get(`https://api.postalpincode.in/pincode/${pinCode}`)
      .then((response) => {
        console.log(response.data[0]);
      });
    }, 2000)

    return () => clearTimeout(getData)
  }, [pinCode])


>>Lodash, react debounce package.


*/
