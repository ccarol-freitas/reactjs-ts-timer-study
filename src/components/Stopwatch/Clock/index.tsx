import style from "./Time.module.scss";

interface Props {
  time: number | undefined;
}

const Clock = ({ time = 0 }: Props): any => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minute = String(minutes).padStart(2, "0");
  const second = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.titleTime}>{minute}</span>
      <span className={style.titleTime}>:</span>
      <span className={style.titleTime}>{second}</span>
    </>
  );
};

export default Clock;
