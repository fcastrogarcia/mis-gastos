import SectionTitle from "components/SectionTitle";
import Sidebar from "components/Sidebar";
import TopBar from "./components/TopBar";
import Table from "./components/Table";
import styled from "styled-components";
import { getColor } from "styles/utils";

const TableContainer = styled.div`
  /* background: ${getColor("gray", 100)}; */
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 24px;
`;

const Main = () => {
  return (
    <>
      <div className="container container--with-sidebar">
        <SectionTitle text="Payments & Expenses" />
        <TopBar />
        <TableContainer>
          <Table />
        </TableContainer>
      </div>
      <Sidebar />
    </>
  );
};

export default Main;
