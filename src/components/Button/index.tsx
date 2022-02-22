type Props = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
};
const Button = (props: Props): any => {
  const { type = "button" } = props;
  return (
    <>
      <button type={props.type} className='add_task'>
        {props.text}
      </button>
    </>
  );
};

export default Button;
