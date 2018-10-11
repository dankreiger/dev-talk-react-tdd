import styled from "styled-components";

export const LocalTextStyled = styled.div`
  display: none;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  height: 100vh;
  &.show {
    display: flex;
  }
`;
export const LocalJestText = styled.div`
  font-size: 72px;
`;

export const GitCloneText = styled.code`
  padding: 10px 0;
  z-index: 100;
  font-size: 22px;
`;
export const StyledComplex = styled.div`
  opacity: 1;
  transition: opacity 1s;
  &.hidden {
    opacity: 0;
  }
`;

export const StyledCounter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  text-shadow: 2px 5px 10px #333;
  background: rgba(0, 0, 0, 0.5);
  width: 200px;
  border-radius: 11px;
  color: #fff;
  &.small {
    font-size: 30px;
    width: 300px;
  }
`;
