import styled from "styled-components";
import TopBar from "./components/TopBar";
import Table from "./components/Table";
import SectionTitle from "./components/SectionTitle";
import Sidebar from "components/Sidebar";

const Container = styled.div`
  height: 100%;
  padding: 32px 40px;
  box-sizing: border-box;
  width: calc(100% - 400px);
`;

const Main = () => {
  return (
    <>
      <Container>
        <SectionTitle />
        <TopBar />
        <Table />
      </Container>
      <Sidebar />
    </>
  );
};

export default Main;
