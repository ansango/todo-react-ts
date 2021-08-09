import { createContext, FC, useContext, useState } from "react";
import { TodosContextState } from "../types/todos";

const initialState: TodosContextState = {
  todos: [],
  addTodo: () => {},
};

export const TodosContext = createContext<TodosContextState>(initialState);

const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<string[]>(initialState.todos);
  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);
  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

const useTodo = () => useContext(TodosContext);

export { TodosProvider, useTodo };
