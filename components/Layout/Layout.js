import styled from "styled-components";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { node } from "prop-types";

export const BaseLayout = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const LayoutComponent = styled(BaseLayout)`
  padding-top: 70px;
  width: calc(100% - 400px);
`;

const Layout = ({ children, ...rest }) => {
  return (
    <LayoutComponent {...rest}>
      <Header />
      <Sidebar />
      {children}
    </LayoutComponent>
  );
};

export default Layout;

Layout.propTypes = {
  children: node.isRequired,
};
