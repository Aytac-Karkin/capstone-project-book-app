import styled from "styled-components";

export default function SearchBar({ setSearchTerm }) {
  return (
    <SearchInput
      onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
      type="text"
      id="searchTerm"
      name="searchTerm"
      placeholder="Search... "
      aria-label="searchbar"
    />
  );
}

const SearchInput = styled.input`
  padding: 0.3rem;
  font-size: 0.9rem;
  display: flex;
  margin: auto;
  width: 60%;
  border-radius: 8px;
  border-style: none;
  margin-bottom: 25px;
`;
