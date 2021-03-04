import { authenticateRoute } from "utils/auth";
import Login from "components/Login";

export default Login;

export const getServerSideProps = authenticateRoute({
  redirect: "/main",
  isPrivate: false,
});
