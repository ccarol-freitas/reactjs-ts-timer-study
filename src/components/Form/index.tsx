import { useState } from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import style from "./Form.module.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  cosnt[(tasks, setTasks)] = useState([]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (name && time) {
      setTasks({tasks.name, tasks.time})
      console.log(name, time);
    }
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <div className={style.Container}>
        <div className={style.Content}>
          <input
            className={style.Input}
            name='task'
            id='task'
            type='text'
            placeholder='O que gostaria de estudar hoje?'
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            className={style.Input}
            name='time'
            id='time'
            step='1'
            type='time'
            min='00:00:00'
            max='01:30:00'
            placeholder='Tempo de estudo'
            required
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <div>
          <Button type='submit' text='+' className={style.BtnCircle} />
        </div>
      </div>
    </form>
  );
};

export default Form;
