import { useReducer } from "react";
import "./App.css";
import taskReducer from "./stateManagement/reducers/taskReducer";
import NavBar from "./stateManagement/NavBar";
import HomePage from "./stateManagement/HomePage";
import TasksContext from "./stateManagement/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
