import SectionTitle from "components/SectionTitle";
import Sidebar from "components/Sidebar";
import TopBar from "./components/TopBar";
import Table from "./components/Table";
import styled from "styled-components";
import { getColor } from "styles/utils";

const Header = styled.div`
  padding: 0 24px;
  border-bottom: 1px solid ${getColor("gray", 200)};
`;

const TableContainer = styled.div`
  background: ${getColor("gray", 100)};
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Main = () => {
  return (
    <>
      <div className="container container--with-sidebar">
        <Header>
          <SectionTitle text="Payments & Expenses" />
        </Header>
        <TableContainer>
          <TopBar />
          <Table />
        </TableContainer>
      </div>
      <Sidebar />
    </>
  );
};

export default Main;
