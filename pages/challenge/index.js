import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import ReadingChallenge from "@/components/ReadingChallenge/ReadingChallenge";

export default function ChallengePage({
  books,
  booksInfo,
  handleToggleAlreadyRead,
  handleToggleBookmark,
  handleToggleCurrentlyReading,
  setAnimationActiveAlreadyRead,
  setAnimationActiveBookmark,
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
        setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
        setAnimationActiveBookmark={setAnimationActiveBookmark}
      />
      <Navigation />
    </>
  );
}
