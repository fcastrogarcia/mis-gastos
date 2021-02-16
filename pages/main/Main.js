import { useEffect } from "react";
import { shape } from "prop-types";
import { signOut } from "next-auth/client";
import { authenticateRoute } from "utils/auth";
import cx from "classnames";
import styles from "./Main.module.scss";
import Header from "./components/Header";

const Main = ({ session }) => {
  console.log(session);
  // useEffect(() => {
  //   fetch("/api/items")
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <div className={cx("layout")}>
      <div className={styles.container}>
        <button
          styles={{ zIndex: 10000 }}
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Sign out
        </button>
        {/* <Header user={session.user} /> */}
      </div>
    </div>
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
