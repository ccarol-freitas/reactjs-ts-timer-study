import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List/indext";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/tasks";
import style from "./App.module.scss";

const App = (): any => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  };

  const finishTask = () => {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              finish: true,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <main className={style.container}>
      <Form setTasks={setTasks} />
      <div className={style.content}>
        <aside>
          <h4 className={style.titleCard}>
            Escolha um card e inicie os estudos :)
          </h4>
        </aside>
        <List tasks={tasks} selectTask={selectTask} />
        <Stopwatch selected={selected} finishTask={finishTask} />
      </div>
    </main>
  );
};

export default App;
