import { useState } from "react";
import { v4 } from "uuid";

const TodoApp = () => {
  const [todoTitle, setTodoTitle] = useState([]);

  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos((lastState) => [...lastState, { title: todoTitle, id: v4() }]);
    setTodoTitle("");
  };
  const handleTodoClick = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };
  const updatePrompt = () => {
    const promtData = prompt("enter item");
    const todosCopy = [...todos];
    const todosCopyV2 = todosCopy.map((elem) => {
      const elemCp = { ...elem };
      elemCp.title = "Pragati";
      return elemCp;
    });
    console.log(promtData);
    setTodos([...todosCopyV2]);
    // setTodos((prevState) => {
    //   return prevState.map((elem) => {
    //     const elemCp = { ...elem };
    //     elemCp.title = "Pragati";
    //     return elemCp;
    //   });
    // });
    // setTodos((prevState) => {
    //   return prevState.map((item) => {
    //     item.title = "pragati";
    //     return item;
    //     //console.log(item.title);
    //   });
    // });
  };

  // const updateItem = (newValue) => {
  //   const updatedItems = todos.map((item) => {
  //     if (item === index) {
  //       return newValue;
  //     }
  //     return item;
  //   });
  //   setTodos(updatedItems);
  // };
  console.log(todos);

  return (
    <>
      <div>
        <h1>My Todos List</h1>
        <input
          value={todoTitle}
          type="text"
          placeholder="Enter todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <ul>
          {todos.map((item, index) => {
            return (
              <li onClick={() => handleTodoClick(item.id)} key={item.id}>
                {item.title}
                <button onClick={updatePrompt}>Update</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
