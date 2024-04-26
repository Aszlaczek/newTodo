import { Task } from "./Types";

const Todo = (props: {
  task: Task;
  toggleComplete: Function;
  deleteItem: Function;
  editItem: Function
}) => {
  return (
    <div className="item">
      <div className="id">{props.task.id}</div>
      <p
        onClick={() => {
          props.toggleComplete(props.task.id);
        }}
        className={`${props.task.isReady ? "completed " : ""}` + "name"}
      >
        {props.task.name}
      </p>
      <div className="edit" onClick={() => props.editItem(props.task.id)}>edit</div>
      <div className="delete" onClick={() => props.deleteItem(props.task.id)}>
        delete
      </div>
    </div>
  );
};

export default Todo;
