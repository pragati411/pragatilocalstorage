import { Button } from "./Button";
import InputBox from "./InputBox";
export const EditTodo = ({
  onEditTodo,
  newTodoTitle,
  setNewTodoTitle,
  updateTodo,
}) => {
  return (
    <li>
      <div>
        <InputBox
          value={newTodoTitle}
          placeholder="Enter new todo title"
          onChange={(key, value) => setNewTodoTitle(value)}
        />
        <Button onClick={updateTodo} label="update" />
        {/* <button onClick={updateTodo}>Update</button> */}
      </div>
    </li>
  );
};
