import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import SimpleForm from "../../components/SimpleForm/SimpleForm";
import { getBookById, updateBook } from "../../services/books.service";
import { setBooks } from "../../store/slices/book.slice";
import { toBase64 } from "../../utils/helper.utility";
import { BooksEditSchema } from "./BooksEdit.schema";

interface Props {}

const BooksEdit = (props: Props) => {
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

  const history = useHistory();
  const params: any = useParams();
  const dispatch = useDispatch();

  const bookId = params?.id;

  useEffect(() => {
    const getBookByIdFunc = async (bookId: number) => {
      let response = await getBookById(bookId);
      setFormData(response?.data);
    };

    if (bookId) {
      getBookByIdFunc(bookId);
    }
  }, []);

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
      let response: any = await updateBook(formData);
      dispatch(setBooks(response?.data?.books));
      history.push("/");
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  return (
    <>
      <h2>Edit Book</h2>
      <SimpleForm
        schema={BooksEditSchema}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleFileUploadChange={handleFileUploadChange}
        handleButtonClick={handleFormSubmit}
        handleRemove={handleRemove}
      />
    </>
  );
};

export default BooksEdit;
