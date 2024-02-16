import styled from "styled-components";

const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.3rem;
  font-size: 0.9rem;
`;

const SearchButton = styled.button`
  font-size: 1rem;
`;

export default function SearchBar({ setSearchTerm }) {
  return (
    <>
      <SearchBarContainer id="form">
        <SearchInput
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          id="searchTerm"
          name="searchTerm"
          placeholder="🔍 search... "
          aria-label="searchbar"
        />
      </SearchBarContainer>
    </>
  );
}
