import style from "./Time.module.scss";

const Clock = (): any => {
  return (
    <>
      <span className={style.Title}>0</span>
      <span className={style.Title}>0</span>
      <span className={style.Title}>:</span>
      <span className={style.Title}>0</span>
      <span className={style.Title}>0</span>
    </>
  );
};

export default Clock;
