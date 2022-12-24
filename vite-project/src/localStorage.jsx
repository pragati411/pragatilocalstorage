import { v4 } from "uuid";

import { useState } from "react";
import { useEffect } from "react";

export default function App2507() {
  const [todoTitle, settodoTitle] = useState("");

  const [updated, setUpdated] = useState([]);
  const [printPrev, setPrev] = useState([]);
  const handleChange = (event) => {
    settodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (localStorage.getItem("data")) {
        let x = JSON.parse(localStorage.getItem("data")).find((e) => {
          return e == todoTitle;
        });
        if (!x) {
          setUpdated((lastState) => [
            ...lastState,
            { id: v4(), title: todoTitle },
          ]);
          localStorage.setItem(
            "data",
            JSON.stringify([
              ...JSON.parse(localStorage.getItem("data")),
              todoTitle,
            ])
          );
        } else {
          console.log("SK@ca");
        }
      } else {
        setUpdated((lastState) => [
          ...lastState,
          { id: v4(), title: todoTitle },
        ]);
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
      <h2>todoTitle: {todoTitle}</h2>
      Last Data:{" "}
      {updated.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
      {printPrev.map((it) => {
        return <h1>{it}</h1>;
      })}
    </div>
  );
}
