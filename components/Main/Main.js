import styled from "styled-components";
import TopBar from "./components/TopBar";
import Table from "./components/Table";
import SectionTitle from "./components/SectionTitle";

const Container = styled.div`
  height: 100%;
  padding: 32px 40px;
  box-sizing: border-box;
`;

const Main = () => {
  return (
    <Container>
      <SectionTitle />
      <TopBar />
      <Table />
    </Container>
  );
};

export default Main;
