import styled from "styled-components";

// WRAPPER
export const StyledCommentForm = styled.div`
  padding: 15px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
        padding: 10px;
      }

  /* THE FORM SECTION */
  form {
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 5fr 1fr;
      max-width: 100%;
      margin-top: 10px;

      /* MEDIA QUERIES */
      @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
        margin-top: 20px;
        row-gap: 0;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 
          'text text text'
          'avatar . button'
      }
    }
`;

// AVATAR
export const Avatar = styled.div`
  justify-self: center;

  img {
    margin-top: 5px;
    width: 40px;
    height: 40px;
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
      margin-top: 20px;
      align-self: center;
      grid-area: avatar;

      img {
        width: 40px;
        height: 40px;
      }
    }
`;

// TEXTAREA
export const CommentInput = styled.div`
  text-align: center;
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px 30px;
    margin: 0 auto;
    border: 1px solid hsl(223, 19%, 93%);
    border-radius: 10px;
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    color:  hsl(212, 24%, 26%);
    resize: none;
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
      flex-direction: column;
      align-items: flex-end;
      grid-area: text;

    }
`;

// BUTTON
export const Button = styled.button`
  align-self: start;
  padding: 15px 20px;
  margin-right: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ setColor }) => setColor};
  cursor: pointer;
  opacity: ${props => props.clicked ? '0.5' : 'unset'};

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
      margin-top: 20px ;
      padding: 15px 30px;
      font-weight: 700;
      align-self: center;
      grid-area: button;
    }
`;