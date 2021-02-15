import { useEffect } from "react";
import { signOut } from "next-auth/client";
import { authenticateRoute } from "utils/auth";
import cx from "classnames";
import styles from "./Main.module.scss";

const Main = props => {
  // useEffect(() => {
  //   fetch("/api/create-item");
  // }, []);

  return (
    <div className={cx("flex", styles.layout)}>
      <h1>Main</h1>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>Sign out</button>
    </div>
  );
};

export default Main;

export const getServerSideProps = authenticateRoute();
