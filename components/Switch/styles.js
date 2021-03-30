import styled from "styled-components";
import { getColor } from "styles/utils";

const Switch = styled.div`
  position: relative;
  min-width: 220px;
  max-width: 300px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  border-radius: 50px;
  height: 44px;
  background: ${getColor("gray", 200)};
  &::after {
    content: "";
    position: absolute;
    background: ${getColor("basic", "white")};
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-radius: 50px;
    height: 36px;
    width: calc(50% - 10px);
    transition: all 0.15s ease-in-out;
    top: 4px;
    left: ${({ index }) => (!index ? "4px" : "calc(50% + 6px)")};
  }
`;

const Option = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? getColor("gray", 800) : getColor("gray", 600))};
  position: relative;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  text-transform: capitalize;
`;

export default { Switch, Option };
