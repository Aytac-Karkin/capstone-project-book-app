import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import ReadingChallenge from "@/components/ReadingChallenge/ReadingChallenge";

export default function ChallengePage({
  books,
  booksInfo,
  handleToggleAlreadyRead,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
}) {
  return (
    <>
      <Header />
      <ReadingChallenge
        books={books}
        booksInfo={booksInfo}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
        handleToggleBookmark={handleToggleBookmark}
        handleToggleCurrentlyReading={handleToggleCurrentlyReading}
      />
      <Navigation />
    </>
  );
}
