import styled from "styled-components";
import BaseLogo from "components/Logo";

const Header = styled.header`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  border-right: 2px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 20px 0;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.basic.white};
  z-index: 100000;
`;

const Logo = styled(BaseLogo).attrs({ className: "flex" })`
  && {
    background: ${({ theme }) => theme.colors.basic.white};
    box-shadow: none;
  }
`;

export default { Header, Logo };
