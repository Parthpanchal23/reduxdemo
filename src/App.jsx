import AddTodo from "./componnets/AddTodo";
import Todo from "./componnets/Todo";
import "./css/App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl font-serif">Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
