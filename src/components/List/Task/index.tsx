import style from "./Task.module.scss";

const Task = ({ name, time }: { name: string; time: string }): any => {
  return (
    <li className={style.Card}>
      <h3 className={style.Title}>{name}</h3>
      <span className={style.Text}>{time}</span>
    </li>
  );
};

export default Task;
