import { useState } from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import style from "./Form.module.scss";

const Form = (
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        time: string;
      }[]
    >
  >
) => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTasks((tasks: any) => [...tasks, { ...setTasks }]);
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit.bind(task)}>
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
              setTasks({ ...task, name: e.target.value });
            }}
          />

          <input
            className={style.Input}
            name='time'
            id='time'
            step='1'
            type='time'
            value={task.time}
            min='00:00:00'
            max='01:30:00'
            placeholder='Tempo de estudo'
            required
            onChange={(e) => {
              setTasks({ ...task, time: e.target.value });
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
