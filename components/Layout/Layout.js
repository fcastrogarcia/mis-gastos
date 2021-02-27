import styled from "styled-components";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { node } from "prop-types";

const BaseLayout = styled.div.attrs({ className: "layout" })`
  padding-top: 70px;
  width: calc(100% - 300px);
`;

const Layout = ({ children, ...rest }) => {
  return (
    <BaseLayout {...rest}>
      <Header />
      <Sidebar />
      {children}
    </BaseLayout>
  );
};

export default Layout;

Layout.propTypes = {
  children: node.isRequired,
};
