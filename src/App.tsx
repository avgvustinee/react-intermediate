import { useReducer } from "react";
import "./App.css";
import taskReducer from "./stateManagement/reducers/taskReducer";
import NavBar from "./stateManagement/NavBar";
import HomePage from "./stateManagement/HomePage";
import TasksContext from "./stateManagement/contexts/tasksContext";
import AuthContext from "./stateManagement/contexts/authContext";
import authReducer from "./stateManagement/reducers/authReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
