import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 100px;
  & h2 {
    font-size: 2.4rem;
    margin: 2rem 0;
  }
  & span {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
