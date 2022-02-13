import styled from 'styled-components';

// WRAPPER
export const StyledCard = styled.div`
  display: flex;
  margin: 15px 0;
  padding: 20px 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
    flex-direction: column-reverse;
  }
`;

// LIKE BUTTONS
export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  text-align: center;
  font-weight: 500;
  width: 40px;

    .like-btn {
      background-color: hsl(228, 33%, 97%); 
      border-radius: 10px; 
      color: hsl(238, 40%, 52%);
      padding: 10px 10px;
      width: 100%;
    }

    .query-btn {
      visibility: hidden;
    }

    button {
      border: none;
      background-color: unset;
    }
    
    button:hover {
      cursor: pointer;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      margin-top: 20px;
      

      .like-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: hsl(228, 33%, 97%); 
        border-radius: 10px; 
        color: hsl(238, 40%, 52%);
        padding: 10px 10px;
        width: 100px;
      }

      .query-btn {
        visibility: visible;
        display: flex;

        p {
          font-size: 14px;
        }
      }

    }
`;

// COMMENT SECTION WRAPPER
export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
    width: 100%;
  }
`;

// COMMENT AUTHOR & TIME
export const CommentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 30px;
    height: 30px;
  }

   p {
    margin: 0 10px;
    font-weight: 500;
    color: hsl(212, 24%, 26%);    
  }

  p + p {
    background-color: hsl(238, 40%, 52%);
    color: #fff;
    border-radius: 5px;
    padding: 0 10px;
    margin: 0 15px 0 0;
    font-size: 12px;
    font-weight: 500;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
      display: block;

      p {
        font-size: 14px;
      }
    }
`;

// ACTION BUTTONS
export const ActionButton = styled.div`

button {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  color: ${({ colorType }) => colorType === 'delete' ? 'hsl(358, 79%, 66%)' : 'hsl(238, 40%, 52%)'};
}
  
  img {
      width: 15px;
      height: 15px;
      margin: 0 10px 0 15px;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}) {
      visibility: hidden;
    }
`;

// COMMENT TEXT
export const CommentText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  overflow-wrap: break-word;

  span {
    color: hsl(238, 40%, 52%);
    font-weight: 500;
    margin-right: 5px;
  }
  
  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
  }
`;