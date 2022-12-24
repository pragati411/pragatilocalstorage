import InputBox from "./InputBox";
import { DeleteFc } from "./Delete";
import { EditTodo } from "./EditTodo";
import { Button } from "./Button";
const TodoItem = ({
  item,
  editingTodo,
  newTodoTitle,
  setNewTodoTitle,
  updateTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  if (item.id === editingTodo) {
    return (
      <EditTodo
        onEditTodo={onEditTodo}
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        updateTodo={updateTodo}
      />
    );
  }

  return (
    <li>
      <div>
        <p>{item.title}</p>

        <Button onClick={() => onDeleteTodo(item.id)} label={"Delete"} />
        <Button onClick={() => onEditTodo(item)} label={"Edit"} />
      </div>
    </li>
  );
};

export default TodoItem;
