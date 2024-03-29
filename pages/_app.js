import GlobalStyle from "../styles";
import books from "../lib/books.json";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

const initialBooksInfo = books.map((book) => {
  return { id: book.id, isBookmarked: false, isAlreadyRead: false };
});

export default function App({ Component, pageProps }) {
  const [booksInfo, setBooksInfo] = useLocalStorageState("books-info", {
    defaultValue: initialBooksInfo,
  });
  const [animationActiveBookmark, setAnimationActiveBookmark] = useState(false);
  const [animationActiveAlreadyRead, setAnimationActiveAlreadyRead] =
    useState(false);

  function handleToggleBookmark(id) {
    const currentBook = booksInfo.find((book) => book.id === id);
    if (currentBook) {
      setBooksInfo(
        booksInfo.map((bookInfo) =>
          bookInfo.id === id
            ? { ...bookInfo, isBookmarked: !bookInfo.isBookmarked }
            : bookInfo
        )
      );
    } else {
      setBooksInfo([...booksInfo, { id, isBookmarked: true }]);
    }
  }

  function handleToggleAlreadyRead(id) {
    const currentBook = booksInfo.find((book) => book.id === id);
    if (currentBook) {
      setBooksInfo(
        booksInfo.map((bookInfo) =>
          bookInfo.id === id
            ? { ...bookInfo, isAlreadyRead: !bookInfo.isAlreadyRead }
            : bookInfo
        )
      );
    } else {
      setBooksInfo([...booksInfo, { id, isAlreadyRead: true }]);
    }
  }

  function handleToggleCurrentlyReading(id) {
    const currentBook = booksInfo.find((book) => book.id === id);
    if (currentBook) {
      setBooksInfo(
        booksInfo.map((bookInfo) =>
          bookInfo.id === id
            ? { ...bookInfo, isCurrentlyReading: !bookInfo.isCurrentlyReading }
            : bookInfo
        )
      );
    } else {
      setBooksInfo([...booksInfo, { id, isCurrentlyReading: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        books={books}
        handleToggleBookmark={handleToggleBookmark}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
        handleToggleCurrentlyReading={handleToggleCurrentlyReading}
        booksInfo={booksInfo}
        animationActiveAlreadyRead={animationActiveAlreadyRead}
        animationActiveBookmark={animationActiveBookmark}
        setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
        setAnimationActiveBookmark={setAnimationActiveBookmark}
      />
    </>
  );
}
