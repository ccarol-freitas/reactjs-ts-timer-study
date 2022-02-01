import Button from "../Button";

const Form = (): any => {
  return (
    <form className="new_task">
      <div className="input_container">
        <label htmlFor="task">Adicionar estudo</label>
        <input
          name="task"
          id="task"
          type="text"
          placeholder="O que gostaria de estudar hoje?"
          required
        />
      </div>
      <div className="input_container">
        <label htmlFor="time">Tempo de estudo</label>
        <input
          name="time"
          id="time"
          step="1"
          type="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <div>
        <Button />
      </div>
    </form>
  );
};

export default Form;
