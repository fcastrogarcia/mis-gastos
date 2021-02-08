import { getSession } from "next-auth/client";
import { signIn } from "next-auth/client";
import styles from "./styles.module.scss";
import { FcGoogle } from "react-icons/fc";

const providers = [{ id: "google", name: "google" }];

const Login = () => {
  return (
    <div className="layout">
      <div className={styles.container}>
        <div className={styles.background}></div>
        <div className={styles.login}>
          {providers.map(provider => (
            <div key={provider.name}>
              <button className="button--main-action" onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
                <FcGoogle size={25} className="google" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/feeds",
        permanent: false,
      },
    };
  }

  return { props: { session } };
}
