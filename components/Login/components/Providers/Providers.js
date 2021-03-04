import { signIn } from "next-auth/client";
import styles from "./styles.js";

const providers = [{ id: "google", name: "Google" }];

const Providers = () => {
  const handleSignIn = id => () => signIn(id);

  return (
    <styles.Container>
      <styles.Providers>
        <styles.ProvidersTitle>Log in to your account</styles.ProvidersTitle>
        {providers.map(provider => (
          <div key={provider.name}>
            <button className="button--main-action" onClick={handleSignIn(provider.id)}>
              Sign in with {provider.name}
              <styles.Google size={25} className={styles.google} />
            </button>
          </div>
        ))}
      </styles.Providers>
    </styles.Container>
  );
};

export default Providers;
