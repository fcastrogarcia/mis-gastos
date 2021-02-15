import { signIn } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";
import styles from "./Providers.module.scss";

const providers = [{ id: "google", name: "Google" }];

const Providers = () => {
  const handleSignIn = id => () => signIn(id);

  return (
    <div className={styles.container}>
      <div className={styles.providers}>
        <h2 className={styles["providers-title"]}>Log in to your account</h2>
        {providers.map(provider => (
          <div key={provider.name}>
            <button className="button--main-action" onClick={handleSignIn(provider.id)}>
              Sign in with {provider.name}
              <FcGoogle size={25} className={styles.google} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providers;
