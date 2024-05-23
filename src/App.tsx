import "./App.css";
import CounterComponent from "./components/CounterComponent";
import NavigationBar from "./components/NavigationBar";
import TodoComponent from "./components/TodoComponent";

function App() {
  return (
    <>
      <NavigationBar />
      <div>Counter</div>
      <CounterComponent />
      <TodoComponent />
    </>
  );
}

export default App;
