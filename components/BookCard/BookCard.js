import Image from "next/image";
import styled from "styled-components";

const StyledBook = styled.article`
  list-style: none;
  display: flex;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: -30px;
  margin-right: 10px;
  padding: 5px;
`;

const StyledInfos = styled.ul`
  list-style: none;
  margin-left: -20px;
  .genre {
    font-style: italic;
    padding-top: 5px;
  }
`;

const StyledImage = styled(Image)`
  margin: auto 2px;
`;

export default function BookCard({ title, author, genre, cover }) {
  return (
    <StyledBook>
      <StyledImage src={cover} alt={title} width={100} height={149} />
      <StyledInfos>
        <li>
          <h4>{title}</h4>
        </li>
        <li>{author}</li>
        <li className="genre">{genre}</li>
      </StyledInfos>
    </StyledBook>
  );
}
