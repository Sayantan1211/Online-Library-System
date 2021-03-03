import "./SimpleButton.styles.scss";

interface SimpleButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  customClasses?: string;
  handleClick?: any;
  label: string | number | undefined | null;
  id: string;
}

const SimpleButton = (props: SimpleButtonProps) => {
  const { type, customClasses, handleClick, label, id } = props;

  const manageClick = (e: any) => {
    handleClick(e);
  };

  return (
    <button
      id={id}
      type={type}
      className={customClasses || "btn btn--primary"}
      onClick={manageClick}
    >
      {label}
    </button>
  );
};

export default SimpleButton;
