import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setBooks: (state: any, action: any) => {
      state.allBooks = action.payload;
      state.books = action.payload;
      return state;
    },
    searchBooks: (state: any, action: any) => {
      let filteredData = state.allBooks.filter(
        (item: any) =>
          item?.name?.toLowerCase()?.includes(action.payload && action.payload.toLowerCase()) ||
          item?.author?.toLowerCase()?.includes(action.payload && action.payload.toLowerCase())
      );
      state.books = filteredData;
      return state;
    },
  },
});

export const { setBooks, searchBooks } = bookSlice.actions;
export default bookSlice.reducer;
