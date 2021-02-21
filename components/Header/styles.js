import styled from "styled-components";
import BaseLogo from "components/Logo";

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 10px;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.basic.white};
  z-index: 99;
  width: calc(100% - 300px);
`;

const Logo = styled(BaseLogo).attrs({ className: "flex" })`
  && {
    background: ${({ theme }) => theme.colors.basic.white};
    box-shadow: none;
    padding: 0 8px;
  }
`;

export default { Header, Logo };
