import style from "./Time.module.scss";

interface Props {
  time: number | undefined;
}

const Clock = ({ time = 0 }: Props): any => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const hour = String(hours).padStart(2, "0");
  const minute = String(minutes).padStart(2, "0");
  const second = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.titleTime}>{hour}</span>
      <span className={style.titleTime}>:</span>
      <span className={style.titleTime}>{minute}</span>
      <span className={style.titleTime}>:</span>
      <span className={style.titleTime}>{second}</span>
    </>
  );
};

export default Clock;
