import { useState } from "react";
import "./App.scss";
import Form from "./Form";
import ListTasks from "./Todo";
import { Task } from "./Types";
const App = () => {
  const [todo, setTodo] = useState<Task[] | []>([]);

  const addTodo = (action: string) => {
    setTodo([
      { id: todo.length, name: action, isReady: false, isEditing: false },
      ...todo,
    ]);
  };

  const toggleComplete = (id: number) => {
    setTodo(
      todo.map((e) => {
        return e.id === id ? { ...e, isReady: !e.isReady } : e;
      })
    );
  };

  const deleteItem = (id: number) => {
    setTodo(
      todo.filter(e => e.id !== id)
    );
  };

  const editItem = (id: number) => {
    setTodo(
      todo.map(e => {
        return e.id === id ? { ...e, isEditing: !e.isEditing } : e;
      })
    )
  }

  console.log(todo);
  return (
    <div className="container">
      <Form sendData={addTodo} />
      {todo.map((e) => {
        return (
          <ListTasks
            task={e}
            key={e.id}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default App;
