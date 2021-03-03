import SimpleButton from "../SimpleButton/SimpleButton";
import SimpleFileUpload from "../SimpleFileUpload/SimpleFileUpload";
import SimpleInput from "../SimpleInput/SimpleInput";
import SimpleTextArea from "../SimpleTextArea/SimpleTextArea";
import "./SimpleForm.styles.scss";

interface SimpleFormProps {
  schema: FormSchema;
  formData: any;
  setFormData: any;
  handleFormSubmit: any;
  handleInputChange: any;
  handleFileUploadChange: any;
  handleButtonClick: any;
  handleRemove: any;
}

interface FormSchema {
  name: string;
  controls: any[];
}

const SimpleForm = (props: SimpleFormProps) => {
  const {
    schema,
    formData,
    handleFormSubmit,
    handleInputChange,
    handleFileUploadChange,
    handleButtonClick,
    handleRemove,
  } = props;

  return (
    <form id="lib-form" className="lib-form" onSubmit={handleFormSubmit}>
      {schema.controls.map((item, index) => {
        switch (item.fieldType) {
          case "SimpleInput":
            return (
              <SimpleInput
                id={item.id}
                type={item.type}
                value={formData[item.name]}
                handleChange={handleInputChange}
                key={index}
                label={item.label}
                name={item.name}
                customClasses={item.customClasses}
              />
            );

          case "SimpleTextArea":
            return (
              <SimpleTextArea
                id={item.id}
                value={formData[item.name]}
                handleChange={handleInputChange}
                key={index}
                label={item.label}
                name={item.name}
                customClasses={item.customClasses}
              />
            );

          case "SimpleButton":
            return (
              <SimpleButton
                id={item.id}
                type={item.type}
                label={item.label}
                handleClick={handleButtonClick}
                key={index}
                customClasses={item.customClasses}
              />
            );

          case "SimpleFileUpload":
            return (
              <SimpleFileUpload
                id={item.id}
                showPreview={true}
                value={formData[item.name]}
                handleChange={handleFileUploadChange}
                key={index}
                label={item.label}
                name={item.name}
                customClasses={item.customClasses}
                url={formData.url}
                handleRemove={handleRemove}
              />
            );

          default:
            return null;
        }
      })}
    </form>
  );
};

export default SimpleForm;
