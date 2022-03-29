import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

const Stopwatch = (): any => {
  return (
    <div>
      <div className={style.ContentStopWatch}>
        <div>
          <Clock />
        </div>
        <Button text='Começar!' className={style.BtnSquare} />
      </div>
    </div>
  );
};

export default Stopwatch;
