import styled from "styled-components";

// WRAPPER
export const StyledReplyCard = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid hsl(223, 19%, 93%);
  margin-left: 50px;
  padding-left: 50px; 

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}){
      margin: 0;
      padding: 0;
      border: none;
    }
`;
