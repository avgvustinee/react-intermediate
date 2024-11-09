import "./App.css";
import HomePage from "./stateManagement/HomePage";
import NavBar from "./stateManagement/NavBar";
import Counter from "./stateManagement/counter/Counter";
import { TasksProvider } from "./stateManagement/tasks";

function App() {
  return (
    <TasksProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvider>
  );
}

export default App;
