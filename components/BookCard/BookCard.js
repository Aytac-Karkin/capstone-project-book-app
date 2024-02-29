import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import AlreadyReadButton from "../Button/AlreadyReadButton";
import CurrentlyReadingButton from "../Button/CurrentlyReadingButton";
import MyLibraryButton from "../Button/MyLibraryButton";
import { useEffect } from "react";

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
          <h4>{title}</h4>
          <p>{author}</p>
          <StyledGenre>{genre}</StyledGenre>
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

const StyledButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledGenre = styled.span`
  font-style: italic;
`;
