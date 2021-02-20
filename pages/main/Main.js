import { shape } from "prop-types";
import { authenticateRoute } from "utils/auth";
import styles from "./styles.js";
import Layout from "components/Layout";
import { signOut } from "next-auth/client";

const Main = ({ session }) => {
  return (
    <Layout session={session}>
      <div>
        <button onClick={() => signOut({ callbackUrl: "/login" })}>Sign out</button>
      </div>
    </Layout>
  );
};

export default Main;

export const getServerSideProps = authenticateRoute();

Main.propTypes = {
  session: shape({}),
};

Main.defaultProps = {
  session: {},
};
