import { TodosProvider, useTodo } from "../state/TodosProvider";

const TodosEl = () => {
  const { todos, addTodo } = useTodo();
  return (
    <div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
      <button onClick={() => addTodo("new todo")}>Add Todo</button>
    </div>
  );
};

const Todos = () => (
  <TodosProvider>
    <TodosEl />
  </TodosProvider>
);

export default Todos;
