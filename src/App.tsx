import "./App.css";
import HomePage from "./stateManagement/components/HomePage";
import NavBar from "./stateManagement/components/NavBar";
import AuthProvider from "./stateManagement/providers/AuthProvider";
import TasksProvider from "./stateManagement/providers/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider> 
    </AuthProvider>
  );
}

export default App;
