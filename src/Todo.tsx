import { Task } from "./Types";

const Todo = (props: { task: Task; toggleComplete: Function }) => {
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
      <div className="edit">edit</div>
      <div className="delete">delete</div>
    </div>
  );
};

export default Todo;
