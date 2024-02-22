import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import NotesInput from "../NotesInput/NotesInput";
import { uid } from "uid";

export default function CommentModal({ id }) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    isCancelled: false,
  });

  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  function openModal() {
    setModalState({ isOpen: true, isCancelled: false });
  }

  function closeModal() {
    setModalState({ isOpen: false, isCancelled: false });
  }

  function cancelModal() {
    setModalState({ isOpen: false, isCancelled: true });
  }

  function openDeleteModal(id) {
    setModalState({ ...modalState, isDelete: true, toBeDeleted: id });
  }

  function deleteComment() {
    setModalState({ ...modalState, isDelete: false });
    setComments(
      comments.filter((comment) => {
        return comment?.uniqueId !== modalState.toBeDeleted;
      })
    );
  }

  function cancelDeleteComment() {
    setModalState({ ...modalState, isDelete: false, toBeDeleted: null });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const comment = form.elements.thought.value;
    if (comment.trim().length > 0) {
      setComments([
        ...comments,
        { bookId: id, comment: comment, uniqueId: uid() },
      ]);
      form.reset();
      setModalState({ ...modalState, isOpen: false });
    }
  }

  function editComment(id) {
    setModalState({ ...modalState, isEditing: true, toBeEdited: id });
  }

  function handleEditSubmit(event, commentId) {
    event.preventDefault();
    const form = event.target;

    const comment = form.elements.thought.value;
    if (comment.trim().length > 0) {
      const updatedComments = comments.map((comment_) => {
        return comment_.uniqueId === commentId
          ? { ...comment_, comment: comment }
          : comment_;
      });
      setComments(updatedComments);
      form.reset();
      setModalState({ ...modalState, isEditing: false });
    }
  }

  const commentToBeEdited = comments.find(
    (comment) => comment?.uniqueId === modalState.toBeEdited
  );

  const currentComments = comments.filter((comment) => {
    return comment?.bookId === id;
  });

  return (
    <>
      <h4>What were your thoughts on this book?</h4>
      <CommentsList>
        {currentComments.map((currentComment) => (
          <StyledComment key={currentComment.uniqueId}>
            {currentComment.comment}
            <EditButton onClick={() => editComment(currentComment.uniqueId)}>
              ✎
            </EditButton>
            <DeleteButton
              onClick={() => openDeleteModal(currentComment.uniqueId)}
            >
              🗑️
            </DeleteButton>
          </StyledComment>
        ))}
      </CommentsList>
      <StyledSection>
        <p>
          <CommentButton onClick={openModal}>+</CommentButton>
          add a thought
        </p>
      </StyledSection>

      {modalState.isOpen && (
        <Overlay>
          <CommentForm onSubmit={handleSubmit}>
            <NotesInput />
            <ButtonWrapper>
              <StyledButton type="submit">Save my thoughts</StyledButton>
              <StyledButton type="button" onClick={cancelModal}>
                Cancel
              </StyledButton>
            </ButtonWrapper>
          </CommentForm>
        </Overlay>
      )}

      {modalState.isCancelled && (
        <Overlay>
          <ConfirmationModal>
            <h5>Are you sure you want to cancel adding your thoughts?</h5>
            <ButtonWrapper>
              <StyledButton onClick={openModal}>No!</StyledButton>
              <StyledButton onClick={closeModal}>Yes</StyledButton>
            </ButtonWrapper>
          </ConfirmationModal>
        </Overlay>
      )}

      {modalState.isDelete && (
        <Overlay>
          <ConfirmationModal>
            <h5>Are you sure you want to delete your thought?</h5>
            <ButtonWrapper>
              <StyledButton onClick={cancelDeleteComment}>No!</StyledButton>
              <StyledButton onClick={deleteComment}>Yes</StyledButton>
            </ButtonWrapper>
          </ConfirmationModal>
        </Overlay>
      )}

      {modalState.isEditing && (
        <Overlay>
          <CommentForm
            onSubmit={() => handleEditSubmit(event, commentToBeEdited.uniqueId)}
          >
            <NotesInput commentToBeEdited={commentToBeEdited.comment} />
            <ButtonWrapper>
              <StyledButton type="submit">Save my thoughts</StyledButton>
              <StyledButton type="button" onClick={cancelModal}>
                Cancel
              </StyledButton>
            </ButtonWrapper>
          </CommentForm>
        </Overlay>
      )}
    </>
  );
}

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
  word-wrap: break-word;
  position: relative;
`;

const StyledButton = styled.button`
  margin: 3px;
`;

const DeleteButton = styled.button`
  position: absolute;
  bottom: 1px;
  right: 2px;
  font-size: 0.8rem;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 1px;
  right: 35px;
  font-size: 0.85rem;
`;
