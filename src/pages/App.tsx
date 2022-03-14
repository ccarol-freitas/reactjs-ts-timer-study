import { useState } from "react";
import List from "../components/List/indext";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/tasks";
import style from "./App.module.scss";

const App = (): any => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.Container}>
      <h4 className={style.H4}>Escolha um card e inicie os estudos :)</h4>
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
};

export default App;
