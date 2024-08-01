import { useState } from "react";
import "./App.css";
import TaskList from "./component/TaskList.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
