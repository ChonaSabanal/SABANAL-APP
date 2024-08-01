import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";
import SearchFilter from "./SearchFilter";

function TaskList() {
  const [tasks, setTasks] = useState(Tasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(Tasks);

  const ontoggle = (description) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.description === description
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  // useEffect(() => {
  //   if (searchQuery === "") {
  //     setFilteredTasks(tasks);
  //   } else {
  //     const filterTasks = tasks.filter(
  //       (task) =>
  //         task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         task.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         task.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         (task.deadline &&
  //           task.deadline.toLowerCase().includes(searchQuery.toLowerCase()))
  //     );
  //     setFilteredTasks(filterTasks);
  //   }
  // }, [searchQuery, tasks]);

  const searchTask = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} searchBook={searchTask} />
      <ul>
        <li>No.</li>
        <li>Description</li>
        <li>Assignee</li>
        <li>Deadline</li>
        <li>Status</li>
        <li>Action</li>
      </ul>
      {filteredTasks.map((task, index) => (
        <ul key={index}>
          <li>{index + 1}</li>
          <li>{task.description}</li>
          <li>{task.assignee}</li>
          <li>{task.status === "Completed" ? "-" : task.deadline}</li>
          <li>{task.status}</li>
          <li>
            <button className="btn" onClick={() => ontoggle(task.description)}>
              Toggle Status
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
