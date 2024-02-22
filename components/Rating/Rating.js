import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

export default function Rating({ id }) {
  const [rating, setRating] = useLocalStorageState(`rating ${id}`, {
    defaultValue: null,
  });
  const [hover, setHover] = useState(null);
  const stars = 5;

  function handleClick(currentRating) {
    if (rating === currentRating) {
      setRating(null);
    } else {
      setRating(currentRating);
    }
  }

  return (
    <section>
      {[...Array(stars)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <StyledInput
              key={star}
              type="radio"
              name={`rating ${id}`}
              value={currentRating}
              onClick={() => handleClick(currentRating)}
            />

            <StyledStar
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </StyledStar>
          </label>
        );
      })}
    </section>
  );
}

const StyledInput = styled.input`
  display: none;
`;

const StyledStar = styled.span`
  cursor: pointer;
  font-size: 22px;
  padding: 2px;
`;
