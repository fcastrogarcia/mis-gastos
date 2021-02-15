import cx from "classnames";
import { getSession } from "next-auth/client";
import { signIn } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import styles from "./Login.module.scss";

const providers = [{ id: "google", name: "Google" }];

const Login = () => {
  return (
    <div className="layout">
      <div className={styles.container}>
        <div className={styles.background}>
          <Image src="/assets/finances-6.svg" height={400} width={800} quality={100} />
        </div>
        <div className={styles.login}>
          <div className={styles.header}>
            <div className={styles["logo-container"]}>
              <Image
                src="/assets/logo.png"
                width={40}
                height={40}
                alt="logo"
                quality={100}
              />
            </div>
          </div>
          <div className={cx(styles.providers)}>
            <h2 className={styles.title}>Log in to your account</h2>
            {providers.map(provider => (
              <div key={provider.name}>
                <button
                  className={styles["button--main-action"]}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                  <FcGoogle size={25} className={styles.google} />
                </button>
              </div>
            ))}
          </div>
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
        destination: "/main",
        permanent: false,
      },
    };
  }

  return { props: { session } };
}
