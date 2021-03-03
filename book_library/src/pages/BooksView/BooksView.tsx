import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getAllBooks } from "../../services/books.service";
import { setBooks, searchBooks } from "../../store/slices/book.slice";

interface Props {}

interface State {
  bookSlice: any;
}

const BooksView = (props: Props) => {
  const booksArr = useSelector((state: State) => state.bookSlice);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const getBooks = useCallback(async () => {
    const result = await getAllBooks();
    dispatch(setBooks(result?.data?.books));
  }, []);

  useEffect(() => {
    getBooks();
  }, []);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    dispatch(searchBooks(e.target.value));
  };

  return (
    <>
      <div className="flex">
        <SearchBar
          type="text"
          value={search}
          handleChange={handleSearch}
          placeholder="Search Books..."
          name="search"
          id="libSearch"
        />
      </div>
      <div className="flex flex--row flex--wrap flex--justify-center-no-desktop">
        {booksArr?.books?.map((item: any, index: number) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default BooksView;
