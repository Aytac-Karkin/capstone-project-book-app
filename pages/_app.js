import GlobalStyle from "../styles";
import books from "../lib/books.json";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [booksInfo, setBooksInfo] = useLocalStorageState("books-info", {
    defaultValue: [],
  });

  function HandleToggleBookmark(id) {
    const currentBook = booksInfo.find((book) => book.id === id);
    if (currentBook) {
      setBooksInfo(
        booksInfo.map((bookInfo) =>
          bookInfo.id === id
            ? { id, isBookmarked: !bookInfo.isBookmarked }
            : bookInfo
        )
      );
    } else {
      setBooksInfo([...booksInfo, { id, isBookmarked: true }]);
    }
  }

  function HandleToggleAlreadyRead(id) {
    const currentBook = booksInfo.find((book) => book.id === id);
    if (currentBook) {
      setBooksInfo(
        booksInfo.map((bookInfo) =>
          bookInfo.id === id
            ? { id, isAlreadyRead: !bookInfo.isAlreadyRead }
            : bookInfo
        )
      );
    } else {
      setBooksInfo([...booksInfo, { id, isAlreadyRead: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        books={books}
        HandleToggleBookmark={HandleToggleBookmark}
        HandleToggleAlreadyRead={HandleToggleAlreadyRead}
        booksInfo={booksInfo}
      />
    </>
  );
}
