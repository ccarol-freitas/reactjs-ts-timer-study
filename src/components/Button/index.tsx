type Props = {
  text: string;
};
const Button = (props: Props): any => {
  return (
    <div>
      <button className="add_task">{props.text}</button>
    </div>
  );
};

export default Button;
