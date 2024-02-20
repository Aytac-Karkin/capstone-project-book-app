import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function BookCard({
  title,
  author,
  genre,
  cover,
  booksInfo,
  bookId,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
}) {
  const currentBookInfo = booksInfo?.find((bookInfo) => {
    return bookInfo.id === bookId;
  });

  const currentBookIsAlreadyRead = currentBookInfo?.isAlreadyRead;
  const currentBookIsBookmarked = currentBookInfo?.isBookmarked;
  const currentBookIsCurrentlyReading = currentBookInfo?.isCurrentlyReading;

  return (
    <StyledBook>
      <StyledLink href={`/book-details/${bookId}`}>
        <StyledImage src={cover} alt={title} width={100} height={149} />
        <StyledInfos>
          <h4>{title}</h4>
          <p>{author}</p>
          <StyledGenre>{genre}</StyledGenre>
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
          onClick={() => handleToggleBookmark(bookId)}
        >
          ☆
        </StyledButton>
        <StyledButton
          aria-label={
            currentBookIsCurrentlyReading
              ? "remove from list of books I am currently reading"
              : "add to list of books I am currently reading"
          }
          $isActive={currentBookIsCurrentlyReading}
          onClick={() => handleToggleCurrentlyReading(bookId)}
        >
          📖
        </StyledButton>
        <StyledButton
          aria-label={
            currentBookIsAlreadyRead
              ? "remove from list of books I have already read"
              : "add to list of books I have already read"
          }
          $isActive={currentBookIsAlreadyRead}
          onClick={() => handleToggleAlreadyRead(bookId)}
        >
          ✔️
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
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.19);
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
`;

const StyledButton = styled.button`
  background-color: ${({ $isActive }) =>
    $isActive ? "darkseagreen" : "seashell"};
  border-radius: 4px;
`;

const StyledButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledGenre = styled.p`
  font-style: italic;
`;
