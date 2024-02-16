import styled from "styled-components";

const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.3rem;
  font-size: 0.9rem;
  display: flex;
  margin: auto;
  margin-bottom: 0.5rem;
`;

export default function SearchBar({ setSearchTerm }) {
  return (
    <SearchInput
      onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
      type="text"
      id="searchTerm"
      name="searchTerm"
      placeholder="🔍 search... "
      aria-label="searchbar"
    />
  );
}
