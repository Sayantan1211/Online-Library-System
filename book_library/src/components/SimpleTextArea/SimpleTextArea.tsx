import "./SimpleTextArea.styles.scss";

interface SimpleTextAreaProps {
  customClasses?: string;
  value: string | number;
  handleChange: any;
  label: string;
  id: string;
  name: string;
}

const SimpleTextArea = (props: SimpleTextAreaProps) => {
  const { customClasses, value, handleChange, name, id, label } = props;

  const manageChange = (e: any) => {
    handleChange(e);
  };

  return (
    <div className="flex flex--column">
      <label className="lib-label">{label}</label>
      <textarea
        className={customClasses || "input input__area input--outlined"}
        value={value}
        onChange={manageChange}
        name={name}
        id={id}
        rows={5}
      />
    </div>
  );
};

export default SimpleTextArea;
