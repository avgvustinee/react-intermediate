import "./App.css";
import HomePage from "./stateManagement/HomePage";
import NavBar from "./stateManagement/NavBar";
import { AuthProvider } from "./stateManagement/auth";
import Counter from "./stateManagement/counter/Counter";
import { TasksProvider } from "./stateManagement/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
