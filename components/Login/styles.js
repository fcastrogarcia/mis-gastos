import styled from "styled-components";
import { BaseLayout } from "components/Layout";
import { getColor } from "styles/utils";

const Layout = styled(BaseLayout)`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${getColor("gray", 900)};
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
  color: ${getColor("basic", "fafafa")};
  opacity: 1;
  cursor: default;
  font-weight: 600;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  background: ${getColor("gray", 900)};
  position: absolute;
  left: 400px;
  height: 680px;
`;

export default { Layout, Container, Content, Header, HeaderTitle, Hero };
