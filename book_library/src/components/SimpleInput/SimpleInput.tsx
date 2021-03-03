import "./SimpleInput.styles.scss";

interface SimpleInputProps {
  type: "text" | "number";
  customClasses?: string;
  value: string | number;
  handleChange: any;
  label: string;
  name: string;
  id: string;
}

const SimpleInput = (props: SimpleInputProps) => {
  const { type, customClasses, value, handleChange, name, id, label } = props;

  const manageChange = (e: any) => {
    handleChange(e);
  };

  return (
    <div className="flex flex--column">
      <label className="lib-label">{label}</label>
      <input
        id={id}
        type={type}
        className={customClasses || "input input--outlined"}
        value={value}
        onChange={manageChange}
        name={name}
      />
    </div>
  );
};

export default SimpleInput;
