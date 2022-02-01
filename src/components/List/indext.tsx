import Task from "./Task";

const List = (): any => {
  const tasks = [
    {
      name: "react",
      time: "01:00:00",
    },
    {
      name: "typescript",
      time: "01:50:00",
    },
    {
      name: "javascript",
      time: "01:00:00",
    },
    {
      name: "lógica de programação",
      time: "01:00:00",
    },
    {
      name: "inglês",
      time: "01:00:00",
    },
  ];
  return (
    <aside className="task_list">
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
