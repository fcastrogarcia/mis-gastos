import styled from "styled-components";
import BaseLogo from "components/Logo";
import { getColor } from "styles/utils";

const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background: ${getColor("basic", "white")};
  z-index: 99;
  width: 100%;
  border-bottom: 1px solid ${getColor("gray", 200)};
`;

const Logo = styled(BaseLogo).attrs({ className: "flex" })`
  && {
    background: ${getColor("basic", "white")};
    box-shadow: none;
    padding: 0 8px;
  }
`;

export default { Header, Logo };
