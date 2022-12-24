import { v4 } from "uuid";
import { useState } from "react";
import { useEffect } from "react";

export default function App420() {
  const [todoTitle, settodoTitle] = useState("");

  const [updated, setUpdated] = useState([]);
  const [printPrev, setPrev] = useState([]);
  const handleChange = (event) => {
    settodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUpdated((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
      if (localStorage.getItem("data")) {
        localStorage.setItem(
          "data",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("data")),
            todoTitle,
          ])
        );
      } else {
        localStorage.setItem("data", JSON.stringify([todoTitle]));
      }
      settodoTitle("");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("data")) {
      JSON.parse(localStorage.getItem("data")).map((item) => {
        return setPrev((pre) => [...pre, item]);
      });
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={todoTitle}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <h2> {todoTitle}</h2>

      <h2>
        {updated.map((item) => {
          return <h1 key={item.id}>{item.title}</h1>;
        })}
      </h2>
      <h3>
        {printPrev.map((value) => {
          return <h1>{value}</h1>;
        })}
      </h3>
    </div>
  );
}
