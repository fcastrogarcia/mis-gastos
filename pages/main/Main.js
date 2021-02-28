import { authenticateRoute } from "utils/auth";
import Layout from "components/Layout";
import styles from "./styles";
import CalendarProvider from "context/calendar";
import ItemsProvider from "context/items";
import TopBar from "./components/TopBar";
import Table from "./components/Table";

const Children = () => {
  return (
    <styles.Container>
      <TopBar />
      <Table />
    </styles.Container>
  );
};

const Main = () => {
  return (
    <Layout>
      <CalendarProvider>
        <ItemsProvider>
          <Children />
        </ItemsProvider>
      </CalendarProvider>
    </Layout>
  );
};

export default Main;

export const getServerSideProps = authenticateRoute();
