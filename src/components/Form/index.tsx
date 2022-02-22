import { useState } from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";

const Form = (): any => {
  const [task, setTask] = useState({
    name: "",
    time: "00:00",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTask(task);
  };

  return (
    <form className='new_task' onSubmit={handleSubmit.bind(task)}>
      <div className='input_container'>
        <label htmlFor='task'>Adicionar estudo</label>
        <input
          name='task'
          id='task'
          type='text'
          placeholder='O que gostaria de estudar hoje?'
          required
          onChange={(e) => {
            setTask({ ...task, name: e.target.value });
          }}
        />
      </div>
      <div className='input_container'>
        <label htmlFor='time'>Tempo de estudo</label>
        <input
          name='time'
          id='time'
          step='1'
          type='time'
          value={task.time}
          min='00:00:00'
          max='01:30:00'
          required
          onChange={(e) => {
            setTask({ ...task, time: e.target.value });
          }}
        />
      </div>
      <div>
        <Button type='submit' text='Adicionar' />
      </div>
    </form>
  );
};

export default Form;
