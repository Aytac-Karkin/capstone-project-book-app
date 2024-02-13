import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const StyledSection = styled.section`
  display: flex;
`;

const CommentButton = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  width: 60%;
  height: 50px;
  margin: 15%;
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 10%;
`;
const ConfirmationModal = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-self: center;
  padding-top: 30%;
  background-color: seashell;
  margin-top: 20%;
  border-radius: 8px;
`;

const Overlay = styled.div`
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
  justify-self: center;
  padding-top: 30%;
  background-color: seashell;
  margin-top: 20%;
  border-radius: 8px;
`;
const CommentsList = styled.section`
  margin-top: 20px;
  list-style: none;
`;

const StyledComment = styled.p`
  border: 1px solid black;
  background-color: seashell;
  border-radius: 4px;
  padding: 3px;
`;

export default function CommentModal() {
  const [modal, setModal] = useState(false);
  const [skip, setSkip] = useState(false);
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleSkip = () => {
    setModal(false);
    setSkip(true);
  };

  const closeSkipModal = () => {
    setSkip(false);
    setModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const comment = form.elements.thought.value;
    if (comment) {
      setComments([...comments, comment]);
      form.reset();
      setModal(false);
    }
  };

  return (
    <>
      <h4>What were your thoughts on this book?</h4>
      <CommentsList>
        {comments.map((comment, index) => (
          <StyledComment key={index}>{comment}</StyledComment>
        ))}
      </CommentsList>
      <StyledSection>
        <p>
          <CommentButton onClick={toggleModal}>+</CommentButton>
          add a thought
        </p>
      </StyledSection>

      {modal && (
        <Overlay>
          <CommentForm onSubmit={handleSubmit}>
            <label>What were your thoughts on this Book?</label>
            <StyledInput
              name="thought"
              placeholder="I really liked it!"
              maxLength={250}
            />
            <ButtonWrapper>
              <button type="submit">Save my thoughts</button>
              <button type="button" onClick={toggleSkip}>
                Skip
              </button>
            </ButtonWrapper>
          </CommentForm>
        </Overlay>
      )}

      {skip && (
        <Overlay>
          <ConfirmationModal>
            <h3>Are you sure you want to skip adding your thoughts?</h3>
            <ButtonWrapper>
              <button onClick={closeSkipModal}>No!</button>
              <button
                onClick={() => {
                  setSkip(false);
                  setModal(false);
                }}
              >
                Yes
              </button>
            </ButtonWrapper>
          </ConfirmationModal>
        </Overlay>
      )}
    </>
  );
}
