import React, { useState } from "react";
import { useEffect } from "react";

const Task = () => {
  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState([]);
  const [getLocal, setLocal] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUpdated([...updated, message]);
      setMessage("");
      localStorage.setItem("updated", JSON.stringify([...updated, message]));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("message")) {
      JSON.parse(localStorage.getItem("message")).map((item) => {
        return setLocal((prevState) => [...prevState, item]);
      });
    } else {
      localStorage.setItem("message", message);
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyUp={handleKeyDown}
      />
      <ul>
        {updated.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h1>{getLocal}</h1>
    </div>
  );
};

export default TaskQuestion;
