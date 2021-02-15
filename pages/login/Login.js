import cx from "classnames";
import Image from "next/image";
import styles from "./Login.module.scss";
import { authenticateRoute } from "utils/auth";
import Providers from "./components/Providers";
import Logo from "components/Logo";

const Header = () => (
  <header className={styles.header}>
    <h2 className={styles["header-title"]}>/Expense tracker</h2>
    <Logo />
  </header>
);

const Login = () => {
  return (
    <div className={cx("layout", styles.background)}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles["hero"]}>
            <Image
              src="/assets/finances-6.svg"
              objectFit="cover"
              height={400}
              width={800}
              quality={100}
            />
          </div>
          <Providers />
        </div>
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps = authenticateRoute({
  redirect: "/main",
  isPrivate: false,
});
