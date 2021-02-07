import { providers, signIn, signOut, useSession } from "next-auth/client";

export default function SignIn({ providers }) {
  const [session, loading] = useSession();

  console.log(session);

  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}

SignIn.getInitialProps = async context => {
  return {
    providers: await providers(context),
  };
};
