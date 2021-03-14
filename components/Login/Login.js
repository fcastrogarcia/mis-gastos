import Image from "next/image";
import styles from "./styles.js";
import { authenticateRoute } from "utils/auth";
import Providers from "./components/Providers";
import Logo from "components/Logo";

const Header = () => (
  <styles.Header>
    <styles.HeaderTitle>/Expense tracker</styles.HeaderTitle>
    <Logo />
  </styles.Header>
);

const Login = () => {
  return (
    <styles.Layout>
      <styles.Container>
        <Header />
        <styles.Content>
          <styles.Hero>
            <Image
              src="/assets/finances-6.svg"
              objectFit="cover"
              height={400}
              width={800}
              quality={100}
            />
          </styles.Hero>
          <Providers />
        </styles.Content>
      </styles.Container>
    </styles.Layout>
  );
};

export default Login;

export const getServerSideProps = authenticateRoute({
  redirect: "/main",
  isPrivate: false,
});
