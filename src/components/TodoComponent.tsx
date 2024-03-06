import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../state/store";
import {addTodo} from "../state/counter/todoSlice";

const TodoComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.map(item => ({
    id: item.id,
    title: item.title,
  })));
  
  console.log(todos)

  const addTodoHandler = () => {
    dispatch(addTodo())
  }
  return (
    <>
      <div>Todo</div>
      <button onClick={addTodoHandler}>Add Todo</button>
    </>
  );
};

export default TodoComponent