import GlobalStyle from "../styles";
import books from "../lib/books.json";
import useLocalStorageState from "use-local-storage-state";

// const initialbooks = data.map((book) => {
//   return { ...book, isBookmarked: false };
// });

export default function App({ Component, pageProps }) {
  // const [books, setBooks] = useLocalStorageState("books", {
  //   defaultValue: initialbooks,
  // });

  // const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
  //   "art-pieces-info",
  //   { defaultValue: [] }
  // );

  // function handleToggleFavorite(slug) {
  //   const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  //   if (artPiece) {
  //     setArtPiecesInfo(
  //       artPiecesInfo.map((pieceInfo) =>
  //         pieceInfo.slug === slug
  //           ? { slug, isFavorite: !pieceInfo.isFavorite }
  //           : pieceInfo
  //       )
  //     );
  //   } else {
  //     setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
  //   }
  // }

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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        books={books}
        HandleToggleBookmark={HandleToggleBookmark}
        booksInfo={booksInfo}
      />
    </>
  );
}
