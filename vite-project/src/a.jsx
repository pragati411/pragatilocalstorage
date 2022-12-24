import { useState } from "react";
import { v4 } from "uuid";

const PracticeTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos((lastState) => [...lastState, { title: todoTitle, id: v4() }]);
    setTodoTitle("");
  };
  const onDeleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };
  const onUpdateTodo = ({ id, title }) => {
    console.log(id, title);
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

  const updateTodo = () => {
    setTodos((prevState) => {
      return prevState.map((item) => {
        if (item.id === editingTodo) {
          item.title = newTodoTitle;
        }
        return item;
      });
    });

    setEditingTodo(null);
    setNewTodoTitle(null);
  };

  const onEditTodo = (item) => {
    setEditingTodo(item.id);
    setNewTodoTitle(item.title);
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
                {item.id === editingTodo ? (
                  <div>
                    <input
                      type={"text"}
                      value={newTodoTitle}
                      placeholder="Enter new todo title"
                      onChange={(e) => setNewTodoTitle(e.target.value)}
                    />

                    <button onClick={updateTodo}>Update</button>
                  </div>
                ) : (
                  <div>
                    <p>{item.title}</p>
                    <button onClick={() => onEditTodo(item)}>Edit</button>
                    <button onClick={() => onDeleteTodo(item.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default PracticeTodo;
