import { authenticateRoute } from "utils/auth";
import Layout from "components/Layout";
import styles from "./styles";

const Main = () => {
  return (
    <Layout>
      <styles.Container></styles.Container>
    </Layout>
  );
};

export default Main;

export const getServerSideProps = authenticateRoute();
