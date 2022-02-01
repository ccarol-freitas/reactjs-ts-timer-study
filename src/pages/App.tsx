import Form from "../components/Form";
import List from "../components/List/indext";
import Stopwatch from "../components/Stopwatch";
import style from "./App.module.scss";

const App = (): any => {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
};

export default App;
