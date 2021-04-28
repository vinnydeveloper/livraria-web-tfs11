import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1";

const bookApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getBooks(name) {
  const response = await bookApi.get(`/volumes?q=${name}`);

  const books = response.data;

  return books;
}
