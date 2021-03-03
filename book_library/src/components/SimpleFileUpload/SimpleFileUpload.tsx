import "./SimpleFileUpload.styles.scss";

interface SimpleFileUploadProps {
  customClasses?: string;
  value: string | number | undefined;
  handleChange: any;
  showPreview?: boolean;
  label: string;
  name: string;
  id: string;
  url?: string;
  handleRemove: any;
}

const SimpleFileUpload = (props: SimpleFileUploadProps) => {
  const {
    customClasses,
    value,
    handleChange,
    showPreview,
    name,
    id,
    url,
    label,
    handleRemove,
  } = props;

  const manageChange = (e: any) => {
    handleChange(e, name);
  };

  return (
    <div className="flex flex--column">
      <label className="lib-label">{label}</label>
      <label>
        <input
          id={id}
          type="file"
          className={customClasses || "input input__file input__file--outlined"}
          onChange={manageChange}
          name={name}
        />
        <div className="file-upload">{value}</div>
      </label>
      {showPreview && url && (
        <div className="preview">
          <div className="btn-remove" onClick={(e) => handleRemove(name)}>
            +
          </div>
          <img src={url} alt="" />
        </div>
      )}
    </div>
  );
};

export default SimpleFileUpload;
