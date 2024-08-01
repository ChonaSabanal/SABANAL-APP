import { useState } from "react";
import "./App.css";
import TaskList from "./component/Task.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Task Management</h1>
      <hr />
      <TaskList />
    </div>
  );
}

export default App;
