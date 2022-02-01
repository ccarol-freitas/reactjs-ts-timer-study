import Button from "../Button";
import Clock from "./Clock";

const Stopwatch = (): any => {
  return (
    <div>
      <p>Escolha um card e inicie os estudos :)</p>
      <div>
        <Clock />
      </div>
      <Button text="Começar!" />
    </div>
  );
};

export default Stopwatch;
