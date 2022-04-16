import { useState } from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uid } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Form = ({ setTasks }: Props) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00:00");
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        id: uid(),
        name,
        time,
        selected: false,
        finish: false,
      },
    ]);
    setName("");
    setTime("00:01:00");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.container}>
        <div className={style.content}>
          <input
            className={style.field}
            name='task'
            id='task'
            type='text'
            placeholder='O que gostaria de estudar hoje?'
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            className={style.field}
            name='time'
            id='time'
            step='1'
            type='time'
            min='00:00:00'
            max='01:30:00'
            placeholder='Tempo de estudo'
            required
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <Button type='submit' text='+' className={style.btnCircle} />
      </div>
    </form>
  );
};

export default Form;
