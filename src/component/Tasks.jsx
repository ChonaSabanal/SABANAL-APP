import React, { useState } from "react";

// Example task data
const names = ["John", "Jane", "Mike", "Lisa"];
const getRandomDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 30);
  const dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + randomDays
  );
  return dueDate.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
};

const initialTasks = [
  {
    description: "Complete React project",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Pending",
  },
  {
    description: "Submit assignment",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Pending",
  },
  {
    description: "Review pull requests",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Completed",
  },
  {
    description: "Prepare presentation",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Pending",
  },
  {
    description: "Update documentation",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Completed",
  },
  {
    description: "Fix bugs",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Pending",
  },
  {
    description: "Deploy application",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Completed",
  },
  {
    description: "Conduct user testing",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Pending",
  },
  {
    description: "Plan sprint",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Completed",
  },
  {
    description: "Write blog post",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getRandomDate(),
    status: "Pending",
  },
];

const Task = ({ task, onToggleStatus }) => (
  <li>
    {task.description} - {task.assignee} - {task.status}
    {task.status === "Pending" && ` - Deadline: ${task.deadline}`}
    <button onClick={() => onToggleStatus(task.description)}>
      Toggle Status
    </button>
  </li>
);

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleStatus = (description) => {
    setTasks(
      tasks.map((task) =>
        task.description === description
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };
};

export default Tasks;
