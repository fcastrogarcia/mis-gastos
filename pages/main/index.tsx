import { authenticateRoute } from "utils/auth";
import { Layout } from "components/Layout";
import CalendarProvider from "context/calendar";
import ItemsProvider from "context/items";
import Main from "components/Main";

const MainPage = () => {
  return (
    <Layout>
      <CalendarProvider>
        <ItemsProvider>
          <Main />
        </ItemsProvider>
      </CalendarProvider>
    </Layout>
  );
};

export default MainPage;

export const getServerSideProps = authenticateRoute();
