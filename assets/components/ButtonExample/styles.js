import styled from 'styled-components';
import { Input } from 'reactstrap';

export const StyledSelect = styled(Input)`
  transform: translateY(-50px);
`

export const StyledButton = styled.button`
  &.interactiveBtn {
    border: none;
    border-radius: 2px;
    padding: 12px 18px;
    margin-top: 20px;
    font-size: 2em;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    background-color: #2196f3;
    box-shadow: 0 0 4px #999;
    outline: none;
    &.ripple {
      background-position: center;
      transition: background 0.8s;
      &:hover {
        background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
          (center / 15000%);
      }
      &:active {
        background-color: #6eb9f7;
        background-size: 100%;
        transition: background 0s;
      }
      &.disabledBtn {
        background-color: rgb(233, 19, 19);
        &:hover {
          background-color: #af4545
            radial-gradient(circle, transparent 1%, #af4545 1%)
            (center / 15000%);
        }
        &:active {
          background-color: #ab0505;
        }
      }
    }
  }
`;
