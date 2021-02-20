import Header from "components/Header";
import styled from "styled-components";

const BaseLayout = styled.div.attrs({ className: "layout" })``;

const Layout = ({ session, children, ...rest }) => {
  return (
    <BaseLayout {...rest}>
      <Header user={session.user} />
      {children}
    </BaseLayout>
  );
};

export default Layout;
