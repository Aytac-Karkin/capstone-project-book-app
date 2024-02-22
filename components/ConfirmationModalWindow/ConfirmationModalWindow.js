import styled from "styled-components";

export default function ConfirmationModalWindow({ onCancel, onConfirm, text }) {
  return (
    <Overlay>
      <ConfirmationModal>
        <h5>Are you sure you want to {text}?</h5>
        <ButtonWrapper>
          <StyledButton onClick={onCancel}>No!</StyledButton>
          <StyledButton onClick={onConfirm}>Yes</StyledButton>
        </ButtonWrapper>
      </ConfirmationModal>
    </Overlay>
  );
}

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

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10%;
`;

const StyledButton = styled.button`
  margin: 3px;
`;
