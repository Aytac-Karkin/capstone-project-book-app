import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import WordLetterCounter from "../LetterCount/LetterCount";

const StyledSection = styled.section`
  display: flex;
`;

const CommentButton = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10%;
`;

const ConfirmationModal = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 20px;
  border: 3px rgb(255, 0, 0) solid;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(49, 49, 49, 0.8);
`;

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(255, 245, 238);
  border-radius: 8px;
  padding: 20px;
`;
const CommentsList = styled.section`
  margin-top: 20px;
  list-style: none;
`;

const StyledComment = styled.p`
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(255, 245, 238);
  border-radius: 4px;
  padding: 3px;
`;

const StyledButton = styled.button`
  margin: 3px;
`;

export default function CommentModal({ id }) {
  const [modal, setModal] = useState(false);
  const [skip, setSkip] = useState(false);
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  function toggleModal() {
    setModal(!modal);
  }

  function toggleSkip() {
    setModal(false);
    setSkip(true);
  }

  function closeSkipModal() {
    setSkip(false);
    setModal(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const comment = form.elements.thought.value;
    if (comment) {
      setComments([...comments, { id: id, comment }]);
      form.reset();
      setModal(false);
    }
  }

  return (
    <>
      <h4>What were your thoughts on this book?</h4>
      <CommentsList>
        {comments.map((comment) => (
          <StyledComment key={id}>{comment}</StyledComment>
        ))}
      </CommentsList>
      <StyledSection>
        <p>
          <CommentButton onClick={() => toggleModal()}>+</CommentButton>
          add a thought
        </p>
      </StyledSection>

      {modal && (
        <Overlay>
          <CommentForm onSubmit={handleSubmit}>
            <label>What were your thoughts on this Book?</label>
            <WordLetterCounter />
            <ButtonWrapper>
              <StyledButton type="submit">Save my thoughts</StyledButton>
              <StyledButton type="button" onClick={() => toggleSkip()}>
                Skip
              </StyledButton>
            </ButtonWrapper>
          </CommentForm>
        </Overlay>
      )}

      {skip && (
        <Overlay>
          <ConfirmationModal>
            <h4>Are you sure you want to skip adding your thoughts?</h4>
            <ButtonWrapper>
              <StyledButton onClick={() => closeSkipModal()}>No!</StyledButton>
              <StyledButton
                onClick={() => {
                  setSkip(false);
                  setModal(false);
                }}
              >
                Yes
              </StyledButton>
            </ButtonWrapper>
          </ConfirmationModal>
        </Overlay>
      )}
    </>
  );
}
