import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List/indext";
import Stopwatch from "../components/Stopwatch";
import style from "./App.module.scss";

const App = (): any => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <>
      <div className={style.Container}>
        <Form onAddTask={handleSubmit} />
        <div className={style.Content}>
          <aside>
            <h4 className={style.H4}>Escolha um card e inicie os estudos :)</h4>
          </aside>
          <List tasks={tasks} />
          <Stopwatch />
        </div>
      </div>
    </>
  );
};

export default App;
