import SectionTitle from "components/SectionTitle";
import Sidebar from "components/Sidebar";
import TopBar from "./components/TopBar";
import Table from "./components/Table";

const Main = () => {
  return (
    <>
      <div className="container container--with-sidebar">
        <SectionTitle text="Payments & Expenses" />
        <TopBar />
        <Table />
      </div>
      <Sidebar />
    </>
  );
};

export default Main;
