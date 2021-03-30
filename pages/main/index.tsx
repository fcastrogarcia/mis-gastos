import { authenticateRoute } from "utils/auth";
import { Layout } from "components/Layout";
import CalendarProvider from "context/calendar";
import ItemsProvider from "context/items";
import Main from "components/Main";
import SideoverProvider from "context/sideovers";

const MainPage = () => {
  return (
    <Layout>
      <CalendarProvider>
        <ItemsProvider>
          <SideoverProvider>
            <Main />
          </SideoverProvider>
        </ItemsProvider>
      </CalendarProvider>
    </Layout>
  );
};

export default MainPage;

export const getServerSideProps = authenticateRoute();
