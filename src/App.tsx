import { useReducer } from "react";
import "./App.css";
import HomePage from "./stateManagement/components/HomePage";
import NavBar from "./stateManagement/components/NavBar";
import TasksContext from "./stateManagement/contexts/tasksContext";
import AuthProvider from "./stateManagement/providers/AuthProvider";
import taskReducer from "./stateManagement/reducers/taskReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
