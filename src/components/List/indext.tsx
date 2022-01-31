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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
