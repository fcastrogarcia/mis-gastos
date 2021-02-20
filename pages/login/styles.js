import styled from "styled-components";

const Layout = styled.div.attrs({ className: "layout" })`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray[900]};
`;

const Container = styled.div.attrs({ className: "flex" })`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1280px;
`;

const Content = styled.div.attrs({ className: "flex" })`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 30px;
  z-index: 10000;
`;

const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[400]};
  opacity: 1;
  cursor: default;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray[900]};
  position: absolute;
  left: 400px;
  height: 680px;
`;

export default { Layout, Container, Content, Header, HeaderTitle, Hero };
