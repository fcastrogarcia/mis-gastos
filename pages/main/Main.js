// import { useEffect } from "react";
import { authenticateRoute } from "utils/auth";
import Layout from "components/Layout";
import styles from "./styles";
import CalendarProvider from "context/calendar";
import TopBar from "./components/TopBar";

const Children = () => {
  return (
    <styles.Container>
      <TopBar />
    </styles.Container>
  );
};

const Main = () => {
  // useEffect(() => {
  //   fetch("/api/items?type=payment")
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // }, []);
  return (
    <Layout>
      <CalendarProvider>
        <Children />
      </CalendarProvider>
    </Layout>
  );
};

export default Main;

export const getServerSideProps = authenticateRoute();
