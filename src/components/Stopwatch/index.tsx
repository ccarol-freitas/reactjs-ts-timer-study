import { useEffect, useState } from "react";
import { ITask } from "../../types/tasks";
import timeToSeconds from "../../utils";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

const Stopwatch = ({ selected, finishTask }: Props): any => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  const regress = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regress(count - 1);
      }
      finishTask();
    }, 1000);
  };

  return (
    <div>
      <div className={style.contentStopWatch}>
        <div>
          <Clock time={time} />
        </div>
        <Button
          text='Começar!'
          className={style.btnSquare}
          onClick={() => regress(time)}
        />
      </div>
    </div>
  );
};

export default Stopwatch;
