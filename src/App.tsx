import "./App.css";
import HomePage from "./stateManagement/components/HomePage";
import NavBar from "./stateManagement/NavBar";
import { AuthProvider } from "./stateManagement/auth";
import { TasksProvider } from "./stateManagement/tasks";

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
