import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const ModalCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  height: fit-content;
  width: 350px;
  z-index: 3;

  h2 {
    color: hsl(212, 24%, 26%);
    margin-bottom: 10px;
    margin-left: 15px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-left: 15px;
  }
  
  button {
    margin: 20px 15px 10px;
    padding: 15px 20px;
  }
`;