import Form from "../components/Form";
import List from "../components/List/indext";
import style from "./App.module.scss";

const App = (): any => {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
};

export default App;
