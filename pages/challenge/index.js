import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import ReadingChallenge from "@/components/ReadingChallenge/ReadingChallenge";

export default function ChallengePage({
  books,
  booksInfo,
  handleToggleAlreadyRead,
}) {
  return (
    <>
      <Header />
      <ReadingChallenge
        books={books}
        booksInfo={booksInfo}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
      />
      <Navigation />
    </>
  );
}
