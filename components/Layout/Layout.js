import styled from "styled-components";
import Header from "components/Header";
import Sidebar from "components/Sidebar";

const BaseLayout = styled.div.attrs({ className: "layout" })``;

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
