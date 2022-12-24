import React, { useState } from "react";

const ToDo = () => {
  // Define a state variable for the list of to-do items
  const [items, setItems] = useState([]);

  // Define a function for adding a new to-do item
  const addItem = (item) => {
    setItems([...items, item]);
  };

  // Define a function for deleting a to-do item
  const deleteItem = (index) => {
    // Create a new array with the item at the specified index removed
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  // Define a function for updating a to-do item
  const updateItem = (index, newValue) => {
    // Create a new array with the item at the specified index updated
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return newValue;
      }
      return item;
    });
    setItems(updatedItems);
  };

  // Render the to-do list and associated form
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button
              onClick={() => updateItem(index, prompt("Enter new value"))}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem(e.target.item.value);
          e.target.item.value = "";
        }}
      >
        <input name="item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDo;
