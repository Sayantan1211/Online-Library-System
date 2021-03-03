import './SearchBar.styles.scss';

interface SearchBarProps {
  type: "text";
  customClasses?: string;
  value: string | number;
  handleChange: any;
  placeholder: string;
  name: string;
  id: string;
}

const SearchBar = (props: SearchBarProps) => {
  const {
    type,
    customClasses,
    value,
    handleChange,
    name,
    id,
    placeholder,
  } = props;

  const manageChange = (e: any) => {
    handleChange(e);
  };

  return (
    <input
      id={id}
      type={type}
      className={customClasses || "input input--search input--outlined"}
      value={value}
      onChange={manageChange}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
