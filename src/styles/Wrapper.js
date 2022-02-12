import styled from "styled-components";

// APP WRAPPER
export const Wrapper = styled.main`
  width: 768px;
  padding: 40px 40px;
  margin: 0 auto;

  /* MEDIA QUERIES */
  @media screen and (max-width: 767px) and (min-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;