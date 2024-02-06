import Header from "@/components/Header/Header";

export default function MyLibraryPage({ books }) {
  const myLibraryBooks = books.filter((book) => {
    return book.isBookmarked === true;
  });
  console.log("librarybooks:", myLibraryBooks);
  return (
    <>
      <Header />
      <h2>My Library</h2>
    </>
  );
}
