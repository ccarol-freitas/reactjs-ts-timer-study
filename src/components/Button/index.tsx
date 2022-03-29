type Props = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: any) => void;
  className?: string;
};
const Button = (props: Props): any => {
  const { type = "button" } = props;
  return (
    <>
      <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
