import { providers, signIn, signOut } from "next-auth/client";

const Login = ({ providers, ...rest }) => {
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
};

Login.getInitialProps = async context => {
  return {
    providers: await providers(context),
  };
};

export default Login;
