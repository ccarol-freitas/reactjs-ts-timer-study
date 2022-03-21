import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

const Stopwatch = (): any => {
  return (
    <div>
      <p className={style.Text}>Escolha um card e inicie os estudos :)</p>
      <div className={style.Border}></div>
      <div className={style.ContentStopWatch}>
        <div>
          <Clock />
        </div>
        <Button text='Começar!' />
      </div>
    </div>
  );
};

export default Stopwatch;
