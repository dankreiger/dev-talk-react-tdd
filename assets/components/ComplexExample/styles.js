import styled from 'styled-components';

export const LocalJestText = styled.div`
  display: none;
  position: absolute;
  font-size: 72px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &.show {
    display: block;
  } 
`
export const StyledComplex = styled.div`
  opacity: 1;
  transition: opacity 1s;
  &.hidden {
    opacity: 0;
  }
`

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
