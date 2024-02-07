import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";

export default function HomePage({ books }) {
  return (
    <>
      <Header />
      <BookList books={books} />
    </>
  );
}
