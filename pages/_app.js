import GlobalStyle from "../styles";
import data from "../lib/books.json";
import useLocalStorageState from "use-local-storage-state";

const initialbooks = data.map((book) => {
  return { ...book, isBookmarked: false };
});

export default function App({ Component, pageProps }) {
  const [books, setBooks] = useLocalStorageState("books", {
    defaultValue: initialbooks,
  });
  function HandleToggleBookmark(id) {
    console.log("hello");
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            isBookmarked: !book.isBookmarked,
          };
        } else {
          return book;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        books={books}
        HandleToggleBookmark={HandleToggleBookmark}
      />
    </>
  );
}
