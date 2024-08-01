const names = ["John", "Jane", "Mike", "Lisa"];
const today = new Date();
const DateOffset = [1, 5, 10, 20, 25, 30];

const getFutureDate = (daysFromToday) => {
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysFromToday);
  return futureDate.toISOString().split("T")[0];
};

const Tasks = [
  {
    description: "Complete React project",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Pending",
  },
  {
    description: "Submit assignment",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Completed",
  },
  {
    description: "Check Documentation",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Pending",
  },
  {
    description: "Kickoff Meeting",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Pending",
  },
  {
    description: "Outing",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Completed",
  },
  {
    description: "Study",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Pending",
  },
  {
    description: "Conduct user testing",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Pending",
  },
  {
    description: "Plan sprint",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Completed",
  },
  {
    description: "Submit assignment",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Pending",
  },
  {
    description: "Review pull requests",
    assignee: names[Math.floor(Math.random() * names.length)],
    deadline: getFutureDate(
      DateOffset[Math.floor(Math.random() * DateOffset.length)]
    ),
    status: "Completed",
  },
];

export default Tasks;
