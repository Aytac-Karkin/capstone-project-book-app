import BookList from "@/components/BookList/BookList";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";
import FilterCategory from "@/components/FilterCategory/FilterCategory";

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
            <FilterCategory
              filterNames={["short", "medium", "long"]}
              category={"book-length"}
            />
          </StyledFilterCategory>

          <StyledFilterCategory>
            <h3>Genre</h3>
            <FilterCategory
              filterNames={[
                "Thriller",
                "Icelandic Crime",
                "Feminism",
                "Young Literature",
                "Psychology",
                "Fantasy",
                "Cats in Japan",
                "Haunted Houses",
                "American Poetry",
                "Body Horror",
                "Court Intrigues",
                "Biography",
                "AI in Fiction",
                "Reviewed by the NYT",
                "Old-School SciFi",
              ]}
              category={"genre"}
            />
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
