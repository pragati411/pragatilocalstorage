import { useState } from "react";
import { v4 } from "uuid";

const TodoAppV1 = () => {
  const [todoTitle, setTodoTitle] = useState("");

  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!todoTitle) {
      return alert("Please enter a todo title");
    }

    setTodos((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
    setTodoTitle("");
  };

  const onDeleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const onUpdateTodo = ({ id, title }) => {
    const newTitle = prompt("Update todo", title);
    if (newTitle === title) {
      return;
    }

    setTodos((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          item.title = newTitle;
        }
        return item;
      });
    });
  };

  return (
    <>
      <div>
        <input
          value={todoTitle}
          type="text"
          placeholder="Enter todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <h1>My Todos</h1>
        <ul>
          {todos.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
                <button onClick={() => onUpdateTodo(item)}>Update</button>
                <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoAppV1;
