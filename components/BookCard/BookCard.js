import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import CurrentlyReadingIcon from "../Icons/CurrentlyReadingIcon";
import BookmarkIcon from "../Icons/BookMarkIcon";
import AlreadyReadIcon from "../Icons/AlreadyReadIcon";

export default function BookCard({
  book,
  booksInfo,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
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
        <StyledButton
          aria-label={
            currentBookIsBookmarked
              ? "remove from my-library"
              : "add to my-library"
          }
          $isActive={currentBookIsBookmarked}
          onClick={() => handleToggleBookmark(id)}
        >
          <BookmarkIcon $isActive={currentBookIsBookmarked} />
        </StyledButton>
        <StyledButton
          aria-label={
            currentBookIsCurrentlyReading
              ? "remove from list of books I am currently reading"
              : "add to list of books I am currently reading"
          }
          $isActive={currentBookIsCurrentlyReading}
          onClick={() => handleToggleCurrentlyReading(id)}
        >
          <CurrentlyReadingIcon $isActive={currentBookIsCurrentlyReading} />
        </StyledButton>
        <StyledButton
          aria-label={
            currentBookIsAlreadyRead
              ? "remove from list of books I have already read"
              : "add to list of books I have already read"
          }
          $isActive={currentBookIsAlreadyRead}
          onClick={() => handleToggleAlreadyRead(id)}
        >
          <AlreadyReadIcon $isActive={currentBookIsAlreadyRead} />
        </StyledButton>
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

const StyledButton = styled.button`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-green)" : "var(--color-light-yellow)"};
  border-radius: 4px;
  border: none;
  width: 32px;
  height: 32px;
`;

const StyledButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  //gap: 4px;
  justify-content: space-evenly;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
`;

const StyledAuthor = styled.p`
  font-size: 17px;
`;
