import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import MyLibraryButton from "../Button/MyLibraryButton";
import CurrentlyReadingButton from "../Button/CurrentlyReadingButton";
import AlreadyReadButton from "../Button/AlreadyReadButton";


export default function BookCard({
  book,
  booksInfo,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
  setAnimationActiveBookmark,
  setAnimationActiveAlreadyRead,
}) {
  const { title, author, genre, cover, id } = book;
  const currentBookInfo = booksInfo?.find((bookInfo) => {
    return bookInfo.id === id;
  });

  const currentBookIsAlreadyRead = currentBookInfo?.isAlreadyRead;
  const currentBookIsBookmarked = currentBookInfo?.isBookmarked;
  const currentBookIsCurrentlyReading = currentBookInfo?.isCurrentlyReading;

  return (
    <StyledBook>
      <StyledLink href={`/book-details/${id}`}>
        <StyledImage src={cover} alt={title} width={100} height={149} />
        <StyledInfos>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthor>{author}</StyledAuthor>
          <p>{genre}</p>
        </StyledInfos>
      </StyledLink>
      <StyledButtonWrapper>
        <MyLibraryButton
          onToggle={handleToggleBookmark}
          id={id}
          isBookmarked={currentBookIsBookmarked}
          setAnimationActiveBookmark={setAnimationActiveBookmark}
          booksInfo={booksInfo}
        />
        <CurrentlyReadingButton
          onToggle={handleToggleCurrentlyReading}
          id={id}
          isCurrentlyReading={currentBookIsCurrentlyReading}
        />
        <AlreadyReadButton
          onToggle={handleToggleAlreadyRead}
          id={id}
          isAlreadyRead={currentBookIsAlreadyRead}
          setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
          booksInfo={booksInfo}
        />
      </StyledButtonWrapper>
    </StyledBook>
  );
}

const StyledBook = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-around;
  gap: 5px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.15);
  background-color: var(--color-light-yellow);
  padding-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  width: 90%;
  gap: 8px;
`;

const StyledInfos = styled.article`
  flex-grow: 1.5;
`;

const StyledImage = styled(Image)`
  margin: auto 2px;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.15);

`;

const StyledButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
`;

const StyledAuthor = styled.p`
  font-size: 17px;
`;
