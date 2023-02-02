import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 95%;
  margin: 0 auto 2rem auto;
  font-size: 3rem;
  font-weight: bold;
`;
export const CategoryGridContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  justify-items: center;
  margin: 0 auto;
`;

// .category-title {
//   width: 95%;
//   margin: 0 auto 2rem auto;
//   font-size: 3rem;
//   font-weight: bold;
// }

// .category-grid-container {
//   width: 95%;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 30px;
//   row-gap: 30px;
//   justify-items: center;
//   margin: 0 auto;
// }
