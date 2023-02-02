import styled, { css } from "styled-components";

const subColor = "#888888";
const mainColor = "#e38b29";

const shrinkLabel = css`
  transform: translateY(-20px);
  font-size: 1.2rem;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel}
`;
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.8rem;
  padding: 0.8rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 2.5rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

// .group {
//   position: relative;
//   margin: 45px 0;

//   .form-input {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 1.8rem;
//     padding: 0.8rem;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 2.5rem 0;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }

//   input[type="password"] {
//     letter-spacing: 0.3em;
//   }

//   .form-input-label {
//     color: $sub-color;
//     font-size: 1.6rem;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 5px;
//     transition: 300ms ease all;

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }
