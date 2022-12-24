import InputBox from "./InputBox";
const AddInput = ({ handleAddTodo, todoTitle, setTodoTitle }) => {
  return (
    <div>
      <InputBox
        name="todo"
        onChange={(key, value) => setTodoTitle(value)}
        value={todoTitle}
      />

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
export default AddInput;
