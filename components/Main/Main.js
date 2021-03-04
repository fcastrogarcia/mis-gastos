import styled from "styled-components";
import TopBar from "./components/TopBar";
import Table from "./components/Table";

const Container = styled.div`
  height: 100%;
  padding: 48px;
  box-sizing: border-box;
`;

const Main = () => {
  return (
    <Container>
      <TopBar />
      <Table />
    </Container>
  );
};

export default Main;
