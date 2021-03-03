import { axios } from "./axios";

export const getAllBooks = () => {
  return axios.get("/books");
};

export const getBookById = (id: number) => {
  return axios.get(`/books/${id}`);
};

export const saveBook = (body: any) => {
  return axios.post("/books", body);
};

export const updateBook = (body: any) => {
  return axios.put("/books", body);
};
