import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";

const StyledFilterCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFilterForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export default function HomePage({
  books,
  booksInfo,
  handleToggleBookmark,
  handleToggleAlreadyRead,
  handleToggleCurrentlyReading,
}) {
  return (
    <>
      <Header />
      <button type="button">Find your next read!</button>
      {/* {filterModal && ( */}
      <div>
        <StyledFilterForm>
          <StyledFilterCategory>
            <h3>Book Length</h3>
            <label htmlFor="booklength-short">
              <input
                type="button"
                id="booklength-short"
                name="bookLength"
                value="short"
              ></input>
            </label>
            <label htmlFor="booklength-medium">
              <input
                type="button"
                id="booklength-medium"
                name="bookLength"
                value="medium"
              ></input>
            </label>
            <label htmlFor="booklength-long">
              <input
                type="button"
                id="booklength-long"
                name="bookLength"
                value="long"
              ></input>
            </label>
          </StyledFilterCategory>

          <StyledFilterCategory>
            <h3>Genre</h3>
            <label htmlFor="genre-thriller">
              <input
                type="button"
                id="genre-thriller"
                name="genre"
                value="Thriller"
              ></input>
            </label>
            <label htmlFor="genre-icelandiccrime">
              <input
                type="button"
                id="genre-icelandiccrime"
                name="genre"
                value="Icelandic Crime"
              ></input>
            </label>
            <label htmlFor="genre-feminism">
              <input
                type="button"
                id="genre-feminism"
                name="genre"
                value="Feminism"
              ></input>
            </label>
            <label htmlFor="genre-young">
              <input
                type="button"
                id="genre-young"
                name="genre"
                value="Young Literature"
              ></input>
            </label>
            <label htmlFor="genre-psychology">
              <input
                type="button"
                id="genre-psychology"
                name="genre"
                value="Psychology"
              ></input>
            </label>
            <label htmlFor="genre-fantasy">
              <input
                type="button"
                id="genre-fantasy"
                name="genre"
                value="Fantasy"
              ></input>
            </label>
            <label htmlFor="genre-cats">
              <input
                type="button"
                id="genre-cats"
                name="genre"
                value="Cats in Japan"
              ></input>
            </label>
            <label htmlFor="genre-haunted">
              <input
                type="button"
                id="genre-haunted"
                name="genre"
                value="Haunted Houses"
              ></input>
            </label>
            <label htmlFor="genre-americanpoetry">
              <input
                type="button"
                id="genre-americanpoetry"
                name="genre"
                value="American Poetry"
              ></input>
            </label>
            <label htmlFor="genre-bodyhorror">
              <input
                type="button"
                id="genre-bodyhorror"
                name="genre"
                value="Body Horror"
              ></input>
            </label>
            <label htmlFor="genre-court">
              <input
                type="button"
                id="genre-court"
                name="genre"
                value="Court Intrigues"
              ></input>
            </label>
            <label htmlFor="genre-biography">
              <input
                type="button"
                id="genre-biography"
                name="genre"
                value="Biography"
              ></input>
            </label>
            <label htmlFor="genre-AI">
              <input
                type="button"
                id="genre-AI"
                name="genre"
                value="AI in Fiction"
              ></input>
            </label>
            <label htmlFor="genre-NYT">
              <input
                type="button"
                id="genre-NYT"
                name="genre"
                value="Reviewed by the NYT"
              ></input>
            </label>
            <label htmlFor="genre-SciFi">
              <input
                type="button"
                id="genre-SciFi"
                name="genre"
                value="Old-School SciFi"
              ></input>
            </label>
          </StyledFilterCategory>
          <StyledFilterCategory>
            <h3>Publishing Year</h3>
            <label htmlFor="starting-year">
              From:
              <input
                type="number"
                id="starting-year"
                min={1000}
                max={2050}
                name="yearStart"
              ></input>
            </label>
            <label htmlFor="ending-year">
              To:
              <input
                type="number"
                id="ending-year"
                min={1000}
                max={2050}
                name="yearEnd"
              ></input>
            </label>
          </StyledFilterCategory>
        </StyledFilterForm>
      </div>
      {/* )} */}
      <BookList
        books={books}
        booksInfo={booksInfo}
        handleToggleBookmark={handleToggleBookmark}
        handleToggleAlreadyRead={handleToggleAlreadyRead}
        handleToggleCurrentlyReading={handleToggleCurrentlyReading}
      />
      <Navigation />
    </>
  );
}
