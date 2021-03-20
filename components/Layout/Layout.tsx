import styled from "styled-components";
import Header from "components/Header";

export const BaseLayout = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const LayoutComponent = styled(BaseLayout)`
  padding-top: 70px;
`;

export const Layout = ({ children, ...rest }: { children: JSX.Element }) => {
  return (
    <LayoutComponent {...rest}>
      <Header />
      {children}
    </LayoutComponent>
  );
};
