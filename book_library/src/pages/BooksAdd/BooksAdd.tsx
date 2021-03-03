import { useState } from "react";
import { useDispatch } from "react-redux";
import SimpleForm from "../../components/SimpleForm/SimpleForm";
import { saveBook } from "../../services/books.service";
import { toBase64 } from "../../utils/helper.utility";
import { BooksAddSchema } from "./BooksAdd.schema";
import { useHistory } from "react-router-dom";
import { setBooks } from "../../store/slices/book.slice";

interface Props {}

const BooksAdd = (props: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    description: "",
    count: "",
    pages: "",
    author: "",
    bookImage: "",
    url: "",
  };

  const [formData, setFormData] = useState<any>(initialValues);
  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    let tempFormData: any = { ...formData };
    tempFormData[e.target.name] = e.target.value;
    setFormData(tempFormData);
  };

  const handleFileUploadChange = async (e: any, name: string) => {
    let tempFormData: any = { ...formData };
    if (e.target.files[0]) {
      tempFormData[name] = e.target.files[0]?.name;
      tempFormData.url = await toBase64(e.target.files[0]);
    } else {
      tempFormData[name] = "";
      tempFormData.url = "";
    }

    setFormData(tempFormData);
  };

  const handleRemove = (name: string) => {
    let tempFormData: any = { ...formData };
    tempFormData[name] = "";
    tempFormData.url = "";
    setFormData(tempFormData);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let response: any = await saveBook(formData);
      dispatch(setBooks(response?.data?.books));
      history.push("/");
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  return (
    <>
      <h2>Add Book</h2>
      <SimpleForm
        schema={BooksAddSchema}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleFileUploadChange={handleFileUploadChange}
        handleButtonClick={handleFormSubmit}
        handleRemove={handleRemove}
      />
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default BooksAdd;
