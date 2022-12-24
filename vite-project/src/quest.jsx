import { useState } from "react";

const Task = () => {
  const [todoTitle, setTodoTitle] = useState([]);

  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos((lastState) => [...lastState, { title: todoTitle }]);
    setTodoTitle("");
  };

  return (
    <>
      <div>
        <input
          value={todoTitle}
          type="text"
          placeholder="Enter  title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {todos.map((item) => {
            return (
              <li onClick={() => handleTodoClick(item.id)} key={item.id}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Task;
